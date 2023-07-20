const { db } = require("../../database/dataAccess.js");
const { getProductDetails } = require("../../utils/styleUtils/dataTransformations");

const getStyles = async (product_id) => {
  return getProductDetails(product_id);
};

module.exports = {
  getStyles,
};
