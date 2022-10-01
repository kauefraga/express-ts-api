import { Request, Response } from 'express';
import { ApiResponse } from '../types/ApiResponse';

export async function HelloController(
  _: Request,
  response: Response<ApiResponse>,
) {
  return response.status(200).json({
    success: true,
    data: {
      message: 'Hello! 👋',
      now: new Date(),
    },
  });
}
