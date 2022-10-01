import { User } from '../../entities/user';
import { UsersRepository } from '../users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }

  async findById(id: string) {
    const foundUser = this.users.find((user) => user.id === id);

    return foundUser || null;
  }

  async findByName(name: string) {
    const foundUser = this.users.find((user) => user.name === name);

    return foundUser || null;
  }

  async delete(name: string) {
    const foundUser = await this.findByName(name);

    this.users.filter((user) => user.name !== foundUser?.name);
  }
}
