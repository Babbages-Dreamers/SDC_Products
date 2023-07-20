const { getStyles } = require("../models")
const { formatStylesData } = require("../../utils/styleUtils/dataTransformations")

const retrieveStyles =  async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const styles = await getStyles(product_id);
    const stylesData = formatStylesData(styles);
    res.send(stylesData);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  retrieveStyles
}