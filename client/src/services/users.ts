/**
 * The above functions in the TypeScript code handle CRUD operations for users by fetching data from an
 * API and performing create, read, update, and delete operations.
 * @param {number} page - The `page` parameter in the `getUsers` function represents the page number of
 * the paginated results you want to retrieve from the API. It is used to calculate the offset for
 * fetching the data.
 * @param {number} pageSize - The `pageSize` parameter in the `getUsers` function represents the number
 * of users to be fetched per page. It determines how many user records will be included in each page
 * of the paginated results.
 * @param {string} [name] - The `name` parameter in the `getUsers` function is used to filter users by
 * their name. If a `name` value is provided, the API call will include a query parameter `q` with the
 * encoded `name` value to filter the results based on the user's name.
 * @param {string} [status] - The `status` parameter in the `getUsers` function is used to filter users
 * based on their status. If a `status` value is provided and it is not equal to "all", the API call
 * will include a query parameter to filter users by that specific status. If no `status`
 * @returns The functions `getUsers`, `createUser`, `updateUser`, and `deleteUser` are returning data
 * related to user operations.
 */

import { UserType } from "../types/types";

export const getUsers = async (page: number, pageSize:number, name?: string, status?: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const offset = (page - 1) * pageSize;
  let url = `${import.meta.env.VITE_API_URL}/users?_page=${page}&_limit=${pageSize}&_start=${offset}`;

  if (name) {
    url += `&q=${encodeURIComponent(name)}`;
  }

  if (status && status !== "all") {
    url += `&status=${encodeURIComponent(status)}`;
  }

  const response = await fetch(url);
  const data: UserType[] = await response.json();

  const total = Number(response.headers.get('X-Total-Count'));
  return {
    data,
    total,
  }
}

export const createUser = async (user: UserType) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data: UserType = await response.json();
  return data;
}

export const updateUser = async (user: UserType) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data: UserType = await response.json();
  return data;
}

export const deleteUser = async (id: number | string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
    method: "DELETE",
  });
  const data: UserType = await response.json();
  return data;
}