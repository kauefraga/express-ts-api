import { NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { ApiResponse } from 'src/types/ApiResponse';

export const RequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100, // 100 reqs per `window` (here, per 15 minute)
  handler: limiter,
});

function limiter(
  _: Request,
  response: Response<ApiResponse>,
  _next: NextFunction
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
