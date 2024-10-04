const axios = require("axios").default;

const getProductCategoryById = async (id) => {
  try {
    return await axios.get(`https://api.mercadolibre.com/categories/${id}`);
  } catch (error) {
    return error;
  }
};

module.exports = getProductCategoryById;
