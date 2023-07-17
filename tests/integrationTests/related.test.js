const request = require("supertest");
const { app, server } = require("../../src/server/server");

describe("GET /api/products/:product_id/related", () => {
  let product_id = 100;

  it("something", async () => {
    const response = await request(app)
      .get(
        `/api/products/${product_id}/related`
      )
      .expect(200);
  });

  afterAll(done => {
    done()
  })
});
