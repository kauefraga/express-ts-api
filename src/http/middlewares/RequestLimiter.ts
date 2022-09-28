import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { ApiResponse } from '../types/ApiResponse';

function limiter(
  _: Request,
  response: Response<ApiResponse>,
) {
  return response.status(429).json({
    success: false,
    data: {
      error: {
        name: 'Too many requests',
        message: 'Request limit exceeded',
      },
      now: new Date(),
    },
  });
}

export const RequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100, // 100 reqs per `window` (here, per 15 minute)
  handler: limiter,
});
