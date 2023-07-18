
const {
  retrieveAllProducts,
  retrieveProduct,
  retrieveStyles,
  retrieveRelated,
} = require("./controllers");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/products", retrieveAllProducts);

app.get("/api/products/:product_id", retrieveProduct);

app.get("/api/products/:product_id/styles", retrieveStyles);

app.get("/api/products/:product_id/related", retrieveRelated);

const startServer = (port) => {
  let server;
  if (process.env.NODE_ENV === 'test') {
    server = app.listen(3001, () => {
      console.log(`Server is listening on port ${3001}`);
    })
  } else {
    server = app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
  return server;
}



module.exports = {
  app: app,
  startServer
}
