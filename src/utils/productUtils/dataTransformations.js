const handleGetProduct = (productInfo) => {
  return productInfo.reduce((accumulator, item) => {
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
}

module.exports = {
  handleGetProduct
}