import { it, describe, expect } from 'vitest';
import { CreateUserUseCase } from './create-user';
import { InMemoryUsersRepository } from '../../repositories/implementations/in-memory-users-repository';
import { User } from '../../entities/user';

describe('Create User', () => {
  it('should be able to create an user', async () => {
    const createUserUseCase = new CreateUserUseCase(
      new InMemoryUsersRepository(),
    );

    expect(createUserUseCase.execute({
      name: 'John Doe',
    })).resolves.toBeInstanceOf(User);
  });

  it('should not be able to create an user (same name)', async () => {
    const createUserUseCase = new CreateUserUseCase(
      new InMemoryUsersRepository(),
    );

    await createUserUseCase.execute({
      name: 'John Doe',
    });

    expect(createUserUseCase.execute({
      name: 'John Doe',
    })).rejects.toThrow();
  });

  it('should not be able to create an user (empty name)', async () => {
    const createUserUseCase = new CreateUserUseCase(
      new InMemoryUsersRepository(),
    );

    expect(createUserUseCase.execute({
      name: '',
    })).rejects.toThrow();
  });
});
