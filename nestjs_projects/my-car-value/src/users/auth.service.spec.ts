import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) => {
        const filteredUsers = users.filter((user) => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      create: (email: string, password: string) => {
        const user = {
          id: Math.floor(Math.random() * 999999),
          email,
          password,
        } as User;
        users.push(user);
        return Promise.resolve(user);
      },
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService },
      ],
    }).compile();
    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });
  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signUp('test1@test.com', 'password1');
    expect(user.password).not.toEqual('password1');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });
  it('throws an error if user signup with existing email', async (done) => {
    // fakeUsersService.find = () =>
    //   Promise.resolve([
    //     { id: 1, email: 'test@test.com', password: 'password' } as User,
    //   ]);
    await service.signUp('test2@test.com', 'password2');
    try {
      await service.signUp('test2@test.com', 'password2');
    } catch (err) {
      done();
    }
  });
  it('throws error for an unused email', async (done) => {
    try {
      await service.signIn('test3@test.com', 'password3');
    } catch (err) {
      done();
    }
  });
  it('throws error for an invalid password', async (done) => {
    // fakeUsersService.find = () =>
    //   Promise.resolve([
    //     { id: 1, email: 'test@test.com', password: 'password' } as User,
    //   ]);
    await service.signUp('test4@test.com', 'password4');
    try {
      await service.signIn('test4@test.com', 'password41');
    } catch (err) {
      done();
    }
  });
  it('return a user for an valid password', async () => {
    await service.signUp('test5@test.com', 'password5');
    const user = await service.signIn('test5@test.com', 'password5');
    expect(user).toBeDefined();
  });
});
