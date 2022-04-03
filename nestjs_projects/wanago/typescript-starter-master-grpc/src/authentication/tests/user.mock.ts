import { User } from '../../users/user.entity';

export const mockedUser: User = {
  id: 1,
  email: 'user@email.com',
  name: 'John',
  password: 'hash',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  address: {
    id: 1,
    street: 'streetName',
    city: 'cityName',
    country: 'countryName',
  },
  posts: [],
};
