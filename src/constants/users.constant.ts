import type { IUserRepository } from "~/interfaces/user-repository.interface";
import type { IUser } from "~/interfaces/user.interface";

export const USER_SEARCH_RESULTS: IUser[] = [
  {
    id: 1,
    login: 'mojombo1',
    avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    html_url: 'https://github.com/mojombo',
  },
  {
    id: 2,
    login: 'mojombo2',
    avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    html_url: 'https://github.com/mojombo',
  },
  {
    id: 3,
    login: 'mojombo3',
    avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    html_url: 'https://github.com/mojombo',
  },
];

export const USER: IUser = {
  id: 1,
  login: 'mojombo',
  avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
  html_url: 'https://github.com/mojombo',
};


export const REPOSITORY: IUserRepository = {
  id: 1,
  name: "Hello-World",
  description: "Description",
  full_name: "octocat/Hello-World",
  private: false,
  html_url: "https://github.com/octocat/Hello-World",
  stargazers_count: 80,
  created_at: "2011-01-26T19:01:12Z",
  updated_at: "2011-01-26T19:14:43Z",
};

export const REPOSITORY_LIST: IUserRepository[] = [
  {
    id: 1,
    name: "Hello-World 1",
    description: "Description 1",
    full_name: "octocat/Hello-World",
    private: false,
    html_url: "https://github.com/octocat/Hello-World",
    stargazers_count: 80,
    created_at: "2011-01-26T19:01:12Z",
    updated_at: "2011-01-26T19:14:43Z",
  },
  {
    id: 2,
    name: "Hello-World 2",
    description: "Description 2",
    full_name: "octocat/Hello-World",
    private: false,
    html_url: "https://github.com/octocat/Hello-World",
    stargazers_count: 80,
    created_at: "2011-01-26T19:01:12Z",
    updated_at: "2011-01-26T19:14:43Z",
  },
  {
    id: 3,
    name: "Hello-World 3",
    description: "Description 3",
    full_name: "octocat/Hello-World",
    private: false,
    html_url: "https://github.com/octocat/Hello-World",
    stargazers_count: 80,
    created_at: "2011-01-26T19:01:12Z",
    updated_at: "2011-01-26T19:14:43Z",
  },
];
