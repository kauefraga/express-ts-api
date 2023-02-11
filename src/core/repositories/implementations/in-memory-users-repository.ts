import { User } from '../../entities/user';
import { UsersRepository } from '../users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }

  async findByName(name: string) {
    const foundUser = this.users.find((user) => user.name === name);

    return foundUser || null;
  }
}
