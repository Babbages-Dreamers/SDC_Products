const { retrieveAllProducts } = require("./products")
const { retrieveProduct } = require("./products")
const { retrieveStyles } = require("./styles")
const { retrieveRelated } = require("./related")

module.exports = {
  retrieveAllProducts,
  retrieveProduct,
  retrieveStyles,
  retrieveRelated
}