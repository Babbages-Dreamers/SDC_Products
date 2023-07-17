const { db } = require('../../database/dataAccess.js')

const getRelated = (product_id) => {
  return db.query('SELECT related_product_id FROM related WHERE current_product_id = $1', [product_id])
}

module.exports = {
  getRelated
}