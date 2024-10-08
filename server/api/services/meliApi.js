import {default as axios} from "axios";
import "dotenv/config.js";

/**
 * Metodos de llamada a la API de MercadoLibre
 */

const MELI_API_URL = process.env.MELI_API_URL || "https://api.mercadolibre.com";

/**
 * Obtiene un producto por su id invocando a la API de MELI
 */
const getProductById = async (id) => {
	try {
		return await axios.get(`${MELI_API_URL}/items/${id}`);
	} catch (error) {
		console.error(error);
		return error;
	}
};

/**
 * Obtiene una categoria de producto por su id invocando a la API de MELI
 */
const getProductCategoryById = async (id) => {
	try {
		return await axios.get(`${MELI_API_URL}/categories/${id}`);
	} catch (error) {
		return error;
	}
};

/**
 * Obtiene una descripción de producto por su id invocando a la API de MELI
 */
const getProductDescriptionById = async (id) => {
	try {
		return await axios.get(`${MELI_API_URL}/items/${id}/description`);
	} catch (error) {
		console.error(error);
		return error;
	}
};

/**
 * Obtiene una lista de productos por una query invocando a la API de MELI
 */
const getProductsByQuery = async (q) => {
	try {
		return await axios.get(
			`${MELI_API_URL}/sites/MLA/search?q=${q}&&limit=4`
		);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export {
	getProductById,
	getProductCategoryById,
	getProductDescriptionById,
	getProductsByQuery,
};
