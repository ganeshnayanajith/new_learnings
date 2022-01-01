import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUsersService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeUsersService = {
      findOne: (id: number) => {
        return Promise.resolve({
          id,
          email: 'testc1@test.com',
          password: 'passwordc1',
        } as User);
      },
      find: (email: string) => {
        return Promise.resolve([
          {
            id: 1,
            email,
            password: 'passwordc2',
          } as User,
        ]);
      },
      // remove: (id: number) => {},
      // update: (id: number, attrs: Partial<User>) => {},
    };
    fakeAuthService = {};
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();
    controller = module.get<UsersController>(UsersController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('findAllUsers return a list for a given email', async () => {
    const users = await controller.findAllUsers('testc2@test.com');
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('testc2@test.com');
  });
  it('findUser return a user for a given id', async () => {
    const users = await controller.findUser('1');
    expect(users).toBeDefined();
  });
  it('findUser throws an error for a invalid id', async (done) => {
    fakeUsersService.findOne = () => null;
    try {
      await controller.findUser('1');
    } catch (e) {
      done();
    }
  });
});
