const express = require('express')
const { getAllProducts, getProductInfo } = require('../models/products.js')

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
    const productInfo = await getProductInfo(req.params.product_id)
    console.log(productInfo)
    res.send(productInfo)
  } catch (error) {
    console.log('error')
    res.send(error)
  }
})

app.get('/products/:product_id/styles', (req, res) => {

})

app.get('/products/:product_id/related', (req, res) => {

})

app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`)
})