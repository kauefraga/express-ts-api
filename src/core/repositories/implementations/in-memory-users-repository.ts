import { User } from '../../entities/user';
import { UsersRepository } from '../users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }
}
