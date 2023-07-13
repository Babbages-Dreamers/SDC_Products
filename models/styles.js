const { db } = require('../database/dataAccess.js')

const getStyles = async (product_id) => {
  const styles_table = await db.query('SELECT * FROM styles WHERE product_id = $1', [product_id])
  styles_table.forEach((style, index) => {
    const skus_table = db.query('SELECT * FROM skus WHERE style_id = $1', [style.style_id])
    const photos_table = db.query('SELECT * FROM photos WHERE style_id = $1', [style.style_id])
    Promise.all([skus_table, photos_table])
    .then(([skus, photos]) => console.log(skus))
  })
  // let skus_table = db.query('SELECT * FROM skys WHERE style_id = $1', [style_id])
  // let photos_table = db.query('SELECT * FROM photos WHERE style_id = $1', [style_id])


}

getStyles(32)

module.exports = {
  getStyles
}