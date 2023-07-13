const { getAllProducts, getProductInfo } = require('../models/products.js')
const { getStyles } = require('../models/styles.js')
const express = require('express')

const app = express();

app.use(express.json())

app.get('/products', async (req, res) => {
  try {
    let page = req.body.page;
    let count = req.body.count;
    const allProducts = await getAllProducts(page, count)
    console.log(allProducts)
    res.send(allProducts)
  } catch (error) {
    console.log('error')
    res.send(error)
  }
})

app.get('/products/:product_id', async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const productInfo = await getProductInfo(product_id)
    console.log(productInfo)
    res.send(productInfo)
  } catch (error) {
    console.log('error')
    res.send(error)
  }
})

app.get('/products/:product_id/styles', async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const styles = await getStyles(product_id);
    console.log('these are ther styles: ', styles)
    res.send(styles);
  } catch (error) {
    console.log('error');
    res.send(error);
  }
})

app.get('/products/:product_id/related', (req, res) => {

})

app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`)
})