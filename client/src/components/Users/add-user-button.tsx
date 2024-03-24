/**
 * The `AddUserButton` component renders a button that triggers a modal toggle action to add or edit a
 * user.
 * @returns The `AddUserButton` component is being returned. It is a button component from the Ant
 * Design library that, when clicked, triggers the `toggleModal` function from the `useUsersStore` hook
 * with the argument "createEdit".
 */

import { Button } from "antd";
import { useUsersStore } from "../../store/usersStore";

const AddUserButton = () => {
  const toggleModal = useUsersStore((state) => state.toggleModal);
  return (
    <Button
      type="primary"
      style={{ padding: "4px auto" }}
      onClick={() => toggleModal("createEdit")}
    >
      Agregar usuario
    </Button>
  );
};

export default AddUserButton;
