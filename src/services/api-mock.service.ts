import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { faker } from '@faker-js/faker';

import type { IUser } from '~/interfaces/user.interface';
import type { IUserRepository } from '~/interfaces/user-repository.interface';
import type{ IGitHubAPIResponseSearchUsers } from '~/interfaces/github.interface';

const mock = new MockAdapter(axios, { delayResponse: 2000 });

// Mock a GET request to /search/users
mock.onGet(/\/search\/users/).reply(() => {
  const users: IUser[] = [];
  if (Math.random() < 0.15) {
    return [500, null];
  }
  for (let i = 0; i < faker.number.int({ min: 1, max: 5 }); i++) {
    users.push({
      id: faker.number.int(),
      login: faker.internet.userName(),
      avatar_url: faker.image.avatar(),
      html_url: faker.internet.url(),
    });
  }
  const response: IGitHubAPIResponseSearchUsers = {
    total_count: users.length,
    items: users,
    incomplete_results: false,
  };
  return [200, response];
});

// Mock a GET request to /users/:username/repos
mock.onGet(/\/users\/\S+\/repos/).reply(() => {
  const repos: IUserRepository[] = [];
  if (Math.random() < 0.15) {
    return [500, null];
  }
  for (let i = 0; i < faker.number.int({ min: 1, max: 30 }); i++) {
    const name = faker.lorem.words({ min: 1, max: 3 }).replace(/\b\w/g, char => char.toUpperCase()).replaceAll(' ', '-');
    repos.push({
      id: faker.number.int(),
      name: name,
      description: faker.lorem.sentence(),
      full_name: `${faker.lorem.word()}/${name}`,
      created_at: faker.date.past().toISOString(),
      updated_at: faker.date.past().toISOString(),
      private: false,
      stargazers_count: faker.number.int({ min: 0, max: 1000 }),
      html_url: faker.internet.url(),
    });
  }
  return [200, repos];
});

// Reset the mocks
export const resetMocks = () => {
  mock.reset();
};
