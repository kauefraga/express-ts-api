import { Request, Response } from 'express';
import { User } from '../../../core/entities/user';
import { inMemoryUsersDatabase } from '../../../infra/db';
import { ApiResponse } from '../../types/ApiResponse';

export async function CreateUserController(
  request: Request<unknown, unknown, { name: string }>,
  response: Response<ApiResponse>,
) {
  const { name } = request.body;

  try {
    const user = new User({
      name,
    });

    await inMemoryUsersDatabase.create(user);

    return response.status(201).json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
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
