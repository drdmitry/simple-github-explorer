import axios, { type AxiosRequestConfig } from 'axios';

import type { IGitHubAPIResponseGetUserRepos, IGitHubAPIResponseSearchUsers } from '~/interfaces/github.interface';

export const APICall = async <T>(url: string) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'GET',
    baseURL: 'https://api.github.com',
    headers: {
      // Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    url,
  };

  try {
    const { data } = await axios.request<T>(requestConfig);
    return { error: null, data };
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return { error: err.message, data: null };
    } else {
      return { error: 'Error', data: null };
    }
  }
};

export const apiSearchUsers = (searchTerm: string) => APICall<IGitHubAPIResponseSearchUsers>(`/search/users?q=${searchTerm}&per_page=5`);
export const apiGetUserRepos = (username: string) => APICall<IGitHubAPIResponseGetUserRepos>(`/users/${username}/repos`);
