import type { StateCreator } from "zustand";

export type SearchSlice = {
  searchTerm: string;
  touched: boolean;
  setSearchTerm: (searchTerm: string) => void;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set/*, get*/) => ({
  searchTerm: "",
  touched: false,
  setSearchTerm: (searchTerm: string) => {
    set(() => ({ searchTerm, touched: true }));
  },
});
