const { getStyles } = require("../models")

const retrieveStyles =  async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const styles = await getStyles(product_id);
    res.send(styles);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  retrieveStyles
}