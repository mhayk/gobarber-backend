import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUserRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
  });

  it('it should be create a new user', async () => {
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
    await createUser.execute({
      name: 'Mhayk Whandson',
      email: 'hi@mhayk.com',
      password: '123',
    });

    await expect(
      createUser.execute({
        name: 'Mhayk Whandson',
        email: 'hi@mhayk.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
