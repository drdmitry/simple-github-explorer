import { enqueueSnackbar } from "notistack";
import type { StateCreator } from "zustand";

import type { IUserRepository } from "~/interfaces/user-repository.interface";

import { apiGetUserRepos } from "~/services/api-github.service";

export type ReposSlice = {
  loadingRepos: boolean;
  errorRepos: string | null;
  repos: IUserRepository[];

  fetchUserRepos: (username: string) => Promise<void>;
}

export const createReposSlice: StateCreator<ReposSlice> = (set/*, get*/) => ({
  loadingRepos: false,
  errorRepos: null,
  repos: [],

  fetchUserRepos: async (username: string) => {
    set(() => ({ loadingRepos: true, repos: [] }));
    const response = await apiGetUserRepos(username);
    set(() => ({ loadingRepos: false }));
    if (response?.data) {
      set(() => ({ repos: response.data }));
    }
    if (response?.error) {
      set(() => ({ errorRepos: response.error, repos: [] }));
      enqueueSnackbar(response.error, { variant: "error" });
    }
  },
});
