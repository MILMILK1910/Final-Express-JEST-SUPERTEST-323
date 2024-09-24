// import request from "supertest";
import app from "../app";
import express from "express";
import request from "supertest";

describe("Sanity test", () => {
  test("1 should equal 1", () => {
    expect(1).toBe(1);
  });
  
});

/*describe('users', () => {
  test('Name', async () => {
    const response = await request(app)
      .get('/users')
      .query({ name: 'Yanisa' })
      .expect(200);
    expect(response.text).toBe('Name: Yanisa');
  });
  test('Id', async () => {
    const response = await request(app)
      .get('/id')
      .query({Id:6604101323 })
      .expect(200);
    expect(response.text).toBe('Id:6604101323');
  });
});*/
describe('GET/user', () => {
  it('Profile', async () => {
    const response = await request(app)
      .get('/user')
      .expect(200)
      .expect('Content-Type',/json/);

    expect(response.body).toEqual({
      id: 323,
      name: 'Yanisa',
      lastname: 'Dangcham',
      age: 20
    });
  });
});

