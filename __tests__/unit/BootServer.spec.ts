import request from 'supertest';
import app from '../../src/app';

describe('Boot, request GET `/`', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/v1');

    expect(response.status).toBe(200);
  });
});
