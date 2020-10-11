import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('it should be create a new user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    const user = await createUser.execute({
      name: 'Mhayk Whandson',
      email: 'hi@mhayk.com',
      password: '123',
    });

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('password');
  });

  it('it should not be able to create a new user with email from another', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    await createUser.execute({
      name: 'Mhayk Whandson',
      email: 'hi@mhayk.com',
      password: '123',
    });

    expect(
      createUser.execute({
        name: 'Mhayk Whandson',
        email: 'hi@mhayk.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
