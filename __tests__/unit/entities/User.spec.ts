import { User } from '../../../src/entities/User';

describe('User Entity', () => {
  it('should create a new user entity', () => {
    const user = new User({
      name: 'John Doe',
      createdAt: new Date(),
    });

    expect(user).toBeInstanceOf(User);
  });

  it('should return the name of the user entity', () => {
    const user = new User({
      name: 'John Doe',
      createdAt: new Date(),
    });

    expect(user.name).toEqual('John Doe');
  });
});
