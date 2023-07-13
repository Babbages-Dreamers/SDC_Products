const { db } = require('../database/dataAccess.js')

const getStyles = async (product_id) => {
  const styles_table = await db.query('SELECT * FROM styles WHERE product_id = $1', [product_id])

  const results = styles_table.map((style, index) => {
    const skus_table = db.query('SELECT size, quantity FROM skus WHERE style_id = $1', [style.style_id])
    const photos_table = db.query('SELECT thumbnail_url, url  FROM photos WHERE style_id = $1', [style.style_id])

    return Promise.all([skus_table, photos_table])
    .then(([skus, photos]) => {
      style.photos = photos;
      skus = skus.reduce((obj, value, index) => {
        obj[index + 37] = value;
        return obj;
      }, {})
      style.skus = skus;
      return style;
    })
  })
  return Promise.all(results)
}

module.exports = {
  getStyles
}