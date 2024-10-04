import {default as axios} from "axios";

const getProductDescriptionById = async (id) => {
	try {
		return await axios.get(
			`https://api.mercadolibre.com/items/${id}/description`
		);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export {getProductDescriptionById};
