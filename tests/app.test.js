const request = require('supertest');
const express = require('express');

const app = require('../src/app');

test('GET /tasks should return 200', async () => {
  const res = await request(app).get('/tasks');
  expect(res.statusCode).toBe(200);
});
