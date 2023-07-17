const { getRelated } = require("../models")

const retrieveRelated = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const related = await getRelated(product_id);
    res.send(related);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  retrieveRelated
}