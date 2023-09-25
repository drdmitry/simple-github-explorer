import { enqueueSnackbar } from "notistack";
import type { StateCreator } from "zustand";

import type { IUser } from "~/interfaces/user.interface";

import { apiSearchUsers } from "~/services/api-github.service";

export type UsersSlice = {
  users: IUser[] | null;
  loadingUsers: boolean;
  errorUsers: string | null;
  selectedUser: IUser | null;

  selectUser: (user: IUser | null, fetchUserRepos?: (login: string) => Promise<void>) => void;
  searchUsers: (searchTerm: string) => Promise<void>;
}

export const createUsersSlice: StateCreator<UsersSlice> = (set/*, get*/) => ({
  users: [],
  loadingUsers: false,
  errorUsers: null,
  selectedUser: null,

  selectUser: (user: IUser | null, fetchUserRepos?: (login: string) => Promise<void>) => {
    set(() => ({ selectedUser: user }));
    if (user && fetchUserRepos) {
      void fetchUserRepos(user.login);
    }
  },

  searchUsers: async (searchTerm: string) => {
    set(() => ({ loadingUsers: true, errorUsers: null }));
    const response = await apiSearchUsers(searchTerm);
    set(() => ({ loadingUsers: false }));

    if (response?.data?.items) {
      set(() => ({ users: response.data?.items }));
    }

    if (response?.error) {
      set(() => ({ errorUsers: response.error }));
      enqueueSnackbar(response.error, { variant: "error" });
    }
  },
});
