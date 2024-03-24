/**
 * The DeleteUserModal component renders a modal for deleting a user with options to cancel or confirm
 * deletion.
 * @returns The DeleteUserModal component is being returned. It renders a ModalComponent with the title
 * "Eliminar usuario" and displays a message asking if the user wants to delete the user with the
 * username displayed in red color. It also includes two buttons in the footer - "Cancelar" and
 * "Eliminar" which trigger the handleClose and handleOk functions respectively.
 */

import { Button } from "antd";
import { useUsersStore } from "../../store/usersStore";
import ModalComponent from "./modal-component";
import { useUserActions } from "../../actions/userActions";

const DeleteUserModal = () => {
  const user = useUsersStore((state) => state.user);
  const isModalOpen = useUsersStore((state) => state.isModalOpen);
  const { handleDeleteUser, handleClose } = useUserActions();

  const handleOk = async () => {
    if (user) {
      await handleDeleteUser(user.id);
    }
  };

  return (
    <ModalComponent
      title="Eliminar usuario"
      isOpen={isModalOpen}
      handleOk={handleOk}
      handleClose={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          Cancelar
        </Button>,

        <Button type="primary" danger key="submit" onClick={handleOk}>
          Eliminar
        </Button>,
      ]}
    >
      ¿Está seguro que quiere eliminar el usuario{" "}
      <span style={{ color: "red" }}>@{user?.username}</span>?
    </ModalComponent>
  );
};

export default DeleteUserModal;
