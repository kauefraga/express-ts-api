import { User } from '../entities/user';

export interface UsersRepository {
  create(user: User): Promise<void>
  findByName(name: string): Promise<User | null>
}
