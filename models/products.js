const { db } = require('../database/dataAccess.js')

const getAllProducts = (page = 1, count = 5) => {
  return db.query('SELECT * FROM products OFFSET $1 LIMIT $2', [(page * count), count])
}

const getProductInfo = (product_id) => {
  const product_table = db.query('SELECT * FROM products WHERE product_id = $1', [product_id])
  const features_table = db.query('SELECT feature, value FROM features WHERE product_id = $1', [product_id])

  return Promise.all([product_table, features_table])
  .then(([product_data, features_data]) => {
    product_data.features = features_data;
    return product_data;
  })
  .catch((err) =>  err)
}

module.exports = {
  getProductInfo,
  getAllProducts
}