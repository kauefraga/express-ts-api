import { Request, Response } from 'express';
import { ApiResponse } from '../types/ApiResponse';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'https://production.url';

export class DocsController {
  static handler(
    _: Request,
    response: Response<ApiResponse>
  ) {
    return response.status(200).json({
      success: true,
      data: {
        available: [
          {
            url: `${baseUrl}/v1`,
            alias: '/api/v1',
            method: 'GET',
          },
          {
            url: `${baseUrl}/v1/docs`,
            alias: '/api/v1/docs',
            method: 'GET',
          },
          {
            url: `${baseUrl}/v1/users/create`,
            alias: '/api/v1/users/create',
            method: 'POST',
            input: 'name <string>',
          },
        ],
        now: new Date(),
      },
    });
  }
}
