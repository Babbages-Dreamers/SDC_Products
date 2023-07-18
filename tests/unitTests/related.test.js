const request = require("supertest");
const { app, startServer } = require("../../src/server/server");
const { db } = require("../../src/database/dataAccess");

describe("GET /api/products/:product_id/related", () => {
  let product_id = 98;

  test("Should receive an array of objects", async () => {
    const response = await request(app).get(
      `/api/products/${product_id}/related`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body.every(item => typeof item === "object")).toBe(true)
  });

  afterAll((done) => {
    db.$pool.end();
    done();
  });
});
