import { User } from '../entities/user';

export interface UsersRepository {
  create(user: User): Promise<void>
  findByName(name: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  delete(name: string): Promise<void> // status code 204 no content
}
