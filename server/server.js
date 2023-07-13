const { getAllProducts, getProductInfo } = require("../models/products.js");
const { getStyles } = require("../models/styles.js");
const { getRelatedProducts } = require("../models/related.js")
const express = require("express");

const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    let page = req.body.page;
    let count = req.body.count;
    const allProducts = await getAllProducts(page, count);
    res.send(allProducts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/:product_id", async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const productInfo = await getProductInfo(product_id);
    res.send(productInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/:product_id/styles", async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const styles = await getStyles(product_id);
    res.send(styles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/:product_id/related", async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const related = await getRelatedProducts(product_id);
    res.send(related);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
});
