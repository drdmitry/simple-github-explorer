import type { IUserRepository } from "./user-repository.interface";
import type { IUser } from "./user.interface";

export interface IGitHubAPIResponseSearchUsers {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
};

export interface IGitHubAPIResponseGetUserRepos extends Array<IUserRepository> {
  message?: string;
};
