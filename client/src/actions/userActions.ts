/**
 * The above code defines functions for adding, editing, and removing users, as well as handling user
 * actions in a user management system.
 * @param {UserType} values - The `values` parameter in the code snippet refers to an object containing
 * user information such as username, name, lastname, email, status, and age.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUser, updateUser, deleteUser } from "../services/users";
import { generateUUID } from "../libs/helpers";
import { useUsersStore } from "../store/usersStore";
import { UserType } from "../types/types";

export const addUser = async (values: UserType) => {
  const id = generateUUID();
  const { id: userId, ...restValues } = values;
  await createUser({
    id,
    ...restValues, 
  });
};

export const editUser = async (idUser: string | number, values: UserType) => {
  const { id: userId, ...restValues } = values;
  await updateUser({ id: idUser, ...restValues });
};

export const removeUser = async (id: string | number) => {
  await deleteUser(id);
};

export const useUserActions = () => {
  const fetchUsers = useUsersStore((state) => state.fetchUsers);
  const setUser = useUsersStore((state) => state.setUser);
  const toggleModal = useUsersStore((state) => state.toggleModal);

  const handleFinish = async (values: { id: string | number; username: string; name: string; lastname: string; email: string; status: string; age: number; }, user: { id: string | number; } | null) => {
    if (user) {
      await editUser(user.id, values);
    } else {
      await addUser(values);
    }
    fetchUsers();
    setUser(null);
    toggleModal(null);
  };

  const handleDeleteUser = async (userId: string | number) => {
    await removeUser(userId);
    fetchUsers();
    setUser(null);
    toggleModal(null);
  };

  const handleFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  const handleClose = () => {
    setUser(null);
    toggleModal(null);
  };

  return { handleFinish, handleDeleteUser, handleFinishFailed, handleClose };
};