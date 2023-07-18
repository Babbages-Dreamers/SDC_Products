const { db } = require("../../database/dataAccess.js");

const getAllProducts = (page = 1, count = 5) => {
  return db.query("SELECT * FROM products OFFSET $1 LIMIT $2", [
    page * count,
    count,
  ]);
};

const getProduct = (product_id) => {
  return db.query(
    `SELECT products.*, features.feature, features.value
    FROM products JOIN features
    ON features.product_id = products.id
    WHERE features.product_id = $1`, [product_id]
  )
  .then((data) => {
    return data.reduce((accumulator, item) => {
      if(!accumulator[0]) {
        accumulator[0] = {
          id: item.id,
          name: item.name,
          slogan: item.slogan,
          description: item.description,
          category: item.category,
          default_price: item.default_price,
          features: [],
        }
      }
      accumulator[0].features.push({ feature: item.feature, value: item.value });
      return accumulator;
    }, [])
  })
};

module.exports = {
  getProduct,
  getAllProducts,
};
