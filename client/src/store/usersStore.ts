/**
 * This file defines a Zustand store for managing user data and modal state in the application.
 * It provides functions for fetching users, setting pagination parameters, filtering users,
 * setting selected user data, and toggling modal visibility.
 * @param {number} page - The `page` parameter in the `fetchUsers` function represents the page number
 * of the paginated results to be fetched. It is used to calculate the offset for fetching the data.
 * @param {number} pageSize - The `pageSize` parameter in the `fetchUsers` function represents the number
 * of users to be fetched per page. It determines how many user records will be included in each page
 * of the paginated results.
 * @param {string} [name] - The `name` parameter in the `fetchUsers` function is used to filter users by
 * their name. If a `name` value is provided, the API call will include a query parameter `q` with the
 * encoded `name` value to filter the results based on the user's name.
 * @param {string} [status] - The `status` parameter in the `fetchUsers` function is used to filter users
 * based on their status. If a `status` value is provided and it is not equal to "all", the API call
 * will include a query parameter to filter users by that specific status. If no `status` value is provided
 * or if it equals "all", all users will be fetched.
 */

import { create } from "zustand";
import { type UserType } from "../types/types";
import { getUsers } from "../services/users";

type ModalType = "createEdit" | "delete" | null

type Store = {
  users: UserType[];
  totalUsers: number;
  loading: boolean;
  currentPage: number;
  pageSize: number;
  filters: {
    name: string;
    status: string;
  };
  user: UserType | null;
  modalType: ModalType | null;
  isModalOpen: boolean;
  fetchUsers: (numberPage?: number) => Promise<void>;
  setCurrentPage: (page: number) => void;
  setFilters: (filters: { name: string; status: string }) => void;
  setUser: (user: UserType | null) => void;
  toggleModal: (modalType: ModalType) => void;
}

export const useUsersStore = create<Store>((set, get) => ({
  users: [],
  totalUsers: 0,
  loading: false,
  currentPage: 1,
  pageSize: 9,
  filters: {
    name: "",
    status: "",
  },
  user: null,
  modalType: null,
  isModalOpen: false,
  fetchUsers: async () => {
    set({ loading: true });
    const {data, total} = await getUsers(get().currentPage, get().pageSize, get().filters.name, get().filters.status);
    set({ users: data, totalUsers: total});
    set({ loading: false });
  },
  setCurrentPage: (page) => {
    set({ currentPage: page });
  },
  setFilters: (filters) => {
    set({ filters });
  },
  setUser: (user) => {
    set({ user });
  },
  toggleModal: (modalType) => {
    set({
      modalType,
      isModalOpen: !get().isModalOpen,
    });
  },
}));