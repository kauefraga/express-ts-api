import { Request, Response } from 'express';
import { ApiResponse } from '../../types/ApiResponse';
import { CreateUserUseCase } from '../../../core/usecases/create-user-use-case/create-user';
import { inMemoryUsersDatabase } from '../../../infra/db';

export async function CreateUserController(
  request: Request<unknown, unknown, { name: string }>,
  response: Response<ApiResponse>,
) {
  const { name } = request.body;

  const createUserUseCase = new CreateUserUseCase(
    inMemoryUsersDatabase,
  );

  try {
    const user = await createUserUseCase.execute({ name });

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
