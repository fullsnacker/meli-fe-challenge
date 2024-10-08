import {default as axios} from "axios";

const getProductCategoryById = async (id) => {
	try {
		return await axios.get(`https://api.mercadolibre.com/categories/${id}`);
	} catch (error) {
		return error;
	}
};

export {getProductCategoryById};
