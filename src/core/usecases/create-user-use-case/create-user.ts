import { User } from '../../entities/user';
import { UsersRepository } from '../../repositories/users-repository';

interface CreateUserRequest {
  name: string;
}

type CreateUserResponse = User;

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute({ name }: CreateUserRequest): Promise<CreateUserResponse> {
    if (!name) {
      throw new Error('No name provided');
    }

    const userAlreadyExists = await this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error(`User ${name} already exists`);
    }

    const user = new User({
      name,
    });

    await this.usersRepository.create(user);

    return user;
  }
}
