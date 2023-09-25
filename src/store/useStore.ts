import { create } from 'zustand';

import { type UsersSlice, createUsersSlice } from './slices/usersSlice';
import { type ReposSlice, createReposSlice } from './slices/reposSlice';
import { type SearchSlice, createSearchSlice } from './slices/searchSlice';

type StoreType = UsersSlice & ReposSlice & SearchSlice;

const useStore = create<StoreType>()((...a) =>({
  ...createUsersSlice(...a),
  ...createReposSlice(...a),
  ...createSearchSlice(...a),
}));

export default useStore;
