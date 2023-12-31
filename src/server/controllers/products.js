const { getAllProducts, getProduct } = require("../models")
const { handleGetProduct } = require("../../utils/productUtils/dataTransformations")

const retrieveAllProducts = async (req, res) => {
  try {
    let page = req.body.page;
    let count = req.body.count;
    const allProducts = await getAllProducts(page, count);
    res.send(allProducts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const retrieveProduct = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const productInfo = await getProduct(product_id);
    productData = handleGetProduct(productInfo);
    res.send(productData);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  retrieveAllProducts,
  retrieveProduct
}