const request = require("supertest");
const { app, startServer } = require("../../src/server/server");
const { db } = require("../../src/database/dataAccess");

describe("GET /api/products/...", () => {
  let product_id = 98;

  test("Should receive an array of products", async () => {
    const response = await request(app).get(`/api/products/`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("Should receive a product", async () => {
    const response = await request(app).get(`/api/products/${product_id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterAll((done) => {
    db.$pool.end();
    done();
  });
});
