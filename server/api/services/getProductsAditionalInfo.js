import {getProductById} from "./index.js";

/**
 * Obtiene información adicional, como la dirección del vendedor
 */

const getProductsAditionalInfo = async (items) => {
	try {
		const aditionalInfo = await Promise.all(
			items.map(async (item) => {
				const itemDetailsResponse = await getProductById(item.id);
				const itemDetails = itemDetailsResponse.data;
				const picture =
					itemDetails.pictures.length > 0
						? itemDetails.pictures[0].url
						: item.thumbnail;

				return {
					...item,
					id: item.id,
					title: item.title,
					price: {
						currency: item.currency_id,
						amount: Math.floor(item.price),
						decimals: item.price % 1,
					},
					picture: picture,
					condition: item.condition,
					free_shipping: item.shipping.free_shipping,
					seller_address:
						itemDetails?.seller_address?.state?.name ?? "",
				};
			})
		);
		return aditionalInfo;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export {getProductsAditionalInfo};
