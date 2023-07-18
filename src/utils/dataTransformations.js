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

module.exports = {
  handleFoundItem,
  handleNewItem,
  generateNumber
}