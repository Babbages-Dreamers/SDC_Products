const { db } = require("../../database/dataAccess")

const getProductDetails = async (product_id) => {
  return db.query(
    `SELECT styles.*, photos.*, skus.*, products.name
    FROM products
    JOIN styles ON styles.product_id = products.id
    JOIN photos ON photos.style_id = styles.style_id
    JOIN skus ON skus.style_id = styles.style_id
    WHERE products.id = $1`,[product_id])
}

const generateNumber = () => {
  let currentNum = 37;
  return () => {
    return currentNum++;
  }
};

const handleFoundItem = (foundItem, item, photoIds, skuIds, newSku) => {
 if(!photoIds.has(item.photo_id)) {
  foundItem.photos.push({
    url: item.url,
    thumbnail_url: item.thumbnail_url,
  });
  photoIds.add(item.photo_id)
}
if (!skuIds.has(item.id)) {
  foundItem.skus[newSku()] = {
    size: item.size,
    quantity: item.quantity,
  };
  skuIds.add(item.id)
}
}

const handleNewItem = (item, newSku) => ({
  style_id: item.style_id,
  name: item.name,
  original_price: item.original_price,
  sale_price: item.sale_price,
  "default?": item.default_style,
  photos: [
    {
      url: item.url,
      thumbnail_url: item.thumbnail_url,
    },
  ],
  skus: {
    [newSku()]: {
      size: item.size,
      quantity: item.quantity,
    },
  },
});

const formatStylesData = (styles) => {
  if (styles.length < 1) {
    return [];
  }
  let photoIds = new Set();
  let skuIds = new Set();
  let newSku = generateNumber();

  return styles.reduce(
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
    [{ product_id: styles[0].product_id, results: [] }]
  );
}


module.exports = {
  handleFoundItem,
  handleNewItem,
  generateNumber,
  getProductDetails,
  formatStylesData
}