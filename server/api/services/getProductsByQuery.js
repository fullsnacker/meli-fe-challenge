import {default as axios} from "axios";

const getProductsByQuery = async (q) => {
	try {
		return await axios.get(
			`https://api.mercadolibre.com/sites/MLA/search?q=${q}&&limit=4`
		);
	} catch (error) {
		console.error(error);
		return error;
	}
};
export {getProductsByQuery};
