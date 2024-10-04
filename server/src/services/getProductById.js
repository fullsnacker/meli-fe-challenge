import {default as axios} from "axios";

const getProductById = async (id) => {
	try {
		return await axios.get(`https://api.mercadolibre.com/items/${id}`);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export {getProductById};
