const request = require("supertest");
const { app, startServer } = require("../../src/server/app");
const { db } = require("../../src/database/dataAccess");

describe("GET /api/products/:product_id/styles", () => {
  let product_id = 98;
  let server;
  beforeAll(async () => {
    server = await startServer(3001);
  });

  test("Should receive an array of styles", async () => {
    const response = await request(app).get(
      `/api/products/${product_id}/styles`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  }, 20000);

  afterAll((done) => {
    db.$pool.end();
    server.close(() => {
      console.log("Server closed.");
      done();
    })
  });
});
