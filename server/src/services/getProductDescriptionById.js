const axios = require("axios").default;

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

module.exports = getProductDescriptionById;
