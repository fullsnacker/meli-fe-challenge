import express from "express";
const router = express.Router();

import {findMostFrequentCategory} from "../utils/index.js";
import {middlewareAuthor} from "../middleware/middlewareAuthor.js";

import {
	getProductsByQuery,
	getProductCategoryById,
	getProductById,
	getProductDescriptionById,
	getProductsAditionalInfo,
} from "../services/index.js";

const serviceCall = (req, res, next) => {
	if (req.query && req.query.q) {
		getProductsByQuery(req.query.q).then(async (result) => {
			res.data = result.data;

			if (res.data.results.length > 0) {
				const mostFrequentCategory = findMostFrequentCategory(res.data);

				await Promise.all([
					getProductCategoryById(mostFrequentCategory).then(
						(result) => {
							console.log(result.data);
							res.data.categories = result.data.path_from_root;
						}
					),

					getProductsAditionalInfo(res.data.results).then(
						(result) => {
							res.data.results = result;
						}
					),
				]);
			}

			next();
		});
	} else if (req.params && req.params.id) {
		const productPromise = getProductById(req.params.id);
		const productDescriptionPromise = getProductDescriptionById(
			req.params.id
		);

		Promise.all([productPromise, productDescriptionPromise]).then(
			(result) => {
				const categoryId = result[0].data[0].body.category_id;
				getProductCategoryById(categoryId).then((categories) => {
					res.data = Object.assign(
						{},
						result[0].data,
						result[1].data,
						{
							categories:
								categories && categories.data.path_from_root,
						}
					);

					next();
				});
			}
		);
	}
};

const responseMiddleware = (req, res, next) => {
	const mapping = {
		author: res.author,
	};
	if (req.query && req.query.q) {
		mapping.categories = res.data.categories || [];
		mapping.items = res.data.results || [];
	} else if (req.params && req.params.id) {
		const itemCondition = res.data[0].body.attributes.find(
			(item) => item.id === "ITEM_CONDITION"
		);

		mapping.item = {
			id: res.data.id,
			title: res.data.title,
			price: {
				currency: res.data[0].body.currency_id,
				amount: res.data[0].body.price.toFixed(0),
				decimals: res.data.price % 1,
			},
			picture:
				res.data[0].body.pictures.length &&
				res.data[0].body.pictures[0],
			condition: itemCondition,
			free_shipping:
				res.data[0].body.shipping &&
				res.data[0].body.shipping.free_shipping,
			description: res.data[0].body.plain_text,
			categories: res.data[0].body.categories,
		};
	}

	res.json(mapping);
};

router.get("/:id?", middlewareAuthor, serviceCall, responseMiddleware);

export default router;
