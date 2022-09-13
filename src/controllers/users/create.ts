import { Request, Response } from 'express';
import { User } from '../../entities/User';
import { ApiResponse } from '../../types/ApiResponse';

export class CreateUserController {
  static async handler(
    request: Request<unknown, unknown, { name: string }>,
    response: Response<ApiResponse>
  ) {
    const { name } = request.body;

    try {
      const user = new User({
        name,
        createdAt: new Date(),
      });

      return response.status(201).json({
        success: true,
        data: {
          user: {
            id: user.id,
            name: user.name,
            createdAt: user.createdAt,
          },
          now: new Date(),
        },
      });
    } catch (err: any) {
      return response.status(400).json({
        success: false,
        data: {
          error: {
            name: err.name,
            message: err.message,
          },
          now: new Date(),
        },
      });
    }
  }
}
