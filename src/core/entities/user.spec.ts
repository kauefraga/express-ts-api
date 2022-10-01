import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('User entity', () => {
  it('should create an user entity', () => {
    const user = new User({
      name: 'John Doe',
    });

    expect(user).toBeInstanceOf(User);
  });

  it('should return user name', () => {
    const user = new User({
      name: 'John Doe',
    });

    expect(user.name).toEqual('John Doe');
  });
});
