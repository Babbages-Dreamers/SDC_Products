const { db } = require("../../database/dataAccess.js");
const {
  handleNewItem,
  handleFoundItem,
  generateNumber,
  getProductDetails,
} = require("../../utils/styleUtils/dataTransformations");

const getStyles = async (product_id) => {
  return getProductDetails(product_id).then((data) => {
    if (data.length < 1) {
      return [];
    }

    let photoIds = new Set();
    let skuIds = new Set();
    let newSku = generateNumber();

    return data.reduce(
      (accumulator, item) => {
        let foundItem = accumulator[0].results.find(
          (style) => style.style_id === item.style_id
        );
        if (foundItem) {
          handleFoundItem(foundItem, item, photoIds, skuIds, newSku);
        } else {
          let newStyle = handleNewItem(item, newSku);
          accumulator[0].results.push(newStyle);
          photoIds.add(item.photo_id);
          skuIds.add(item.id);
        }

        return accumulator;
      },
      [{ product_id: data[0].product_id, results: [] }]
    );
  });
};

module.exports = {
  getStyles,
};
