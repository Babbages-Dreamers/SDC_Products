const {
  retrieveAllProducts,
  retrieveProduct,
  retrieveStyles,
  retrieveRelated,
} = require("./controllers");

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/api/products", retrieveAllProducts);

app.get("/api/products/:product_id", retrieveProduct);

app.get("/api/products/:product_id/styles", retrieveStyles);

app.get("/api/products/:product_id/related", retrieveRelated);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});