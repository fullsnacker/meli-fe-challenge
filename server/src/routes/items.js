// import router from "express/Router";
import express from "express";
let router = express.Router();

import {findMostFrequentCategory} from "../utils/index.js";
import {middlewareAuthor} from "../middleware/middlewareAuthor.js";

import {
	getProductsByQuery,
	getProductCategoryById,
	getProductById,
	getProductDescriptionById,
} from "../services/index.js";

const apiCall = (req, res, next) => {
	if (req.query && req.query.q) {
		getProductsByQuery(req.query.q).then((result) => {
			res.data = result.data;
			// console.log(result.data.results[0].category_id);
			// console.log(result.data.results[1].category_id);
			// console.log(result.data.results[2].category_id);
			// console.log(result.data.results[3].category_id);

			const mostFrequentCategory = findMostFrequentCategory(result.data);

			// console.log("MOST" + mostFrequentCategory);
			next();
		});
	} else if (req.params && req.params.id) {
		const productPromise = getProductById(req.params.id);
		const productDescriptionPromise = getProductDescriptionById(
			req.params.id
		);

		Promise.all([productPromise, productDescriptionPromise]).then(
			(result) => {
				const categoryId = result[0].data.category_id;
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
					console.log(res.data.categories);

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
		mapping.items = res.data.results;
		mapping.categories = {};
	} else if (req.params && req.params.id) {
		const itemCondition = res.data.attributes.find(
			(item) => item.id === "ITEM_CONDITION"
		);

		mapping.item = {
			id: res.data.id,
			title: res.data.title,
			price: {
				currency: res.data.currency_id,
				amount: res.data.price.toFixed(0),
				decimals: res.data.price % 1,
			},
			picture: res.data.pictures.length && res.data.pictures[0],
			condition: itemCondition,
			free_shipping: res.data.shipping && res.data.shipping.free_shipping,
			sold_quantity: res.data.sold_quantity,
			description: res.data.plain_text,
		};

		mapping.categories = res.data.categories;
	}

	res.json(mapping);
};

router.get("/:id?", middlewareAuthor, apiCall, responseMiddleware);

// module.exports = router;

export default router;
