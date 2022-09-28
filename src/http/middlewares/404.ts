import { Request, Response } from 'express';
import { ApiResponse } from '../types/ApiResponse';

export function NotFoundMiddleware(
  _: Request,
  response: Response<ApiResponse>,
) {
  return response.status(404).json({
    success: false,
    data: {
      error: {
        name: 'Not Found',
        message: 'The requested URL is not available.',
      },
      now: new Date(),
    },
  });
}
