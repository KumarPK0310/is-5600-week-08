const request = require('supertest');
const app = require('../app.js');  // Import the app without starting the server

describe('The Express Server', () => {
  beforeAll(done => {
    // The server is already ready to go with app.listen not being called
    done();
  });

  test('should return response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test('should respond at /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
  });

  test('should respond at /orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toEqual(200);
  });



});
