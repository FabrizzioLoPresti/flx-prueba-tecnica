/* This code snippet is a React component called `FormUserModal` that is responsible for rendering a
modal form for adding or editing user information. Here's a breakdown of what the code is doing: 
- The `FormUserModal` component is a functional component that renders a modal form for adding or editing user information.
- The component uses the `useUsersStore` hook to access the state and actions related to users.
- The form fields include input fields for username, email, name, lastname, status, and age.
- The form is wrapped in an `antd` `Form` component with validation rules for each field.
- The form submission is handled by the `handleFinish` function, which calls the `handleFinish` action from the `userActions` module.
- The `handleFinish` function checks if the user object is present to determine whether to add or edit a user.
- The `handleFinishFailed` function logs any form submission errors to the console.
- The `handleClose` function closes the modal when the user clicks the cancel button.
- The `FormUserModal` component is used in other components to render the modal form for adding or editing user information.
*/

import { Form, Input, InputNumber, Select, Button } from "antd";
import { useUsersStore } from "../../store/usersStore";
import ModalComponent from "./modal-component";
import { useUserActions } from "../../actions/userActions";

const FormUserModal = () => {
  const isModalOpen = useUsersStore((state) => state.isModalOpen);
  const user = useUsersStore((state) => state.user);
  const { handleFinish, handleFinishFailed, handleClose } = useUserActions();

  return (
    <ModalComponent
      title={user ? "Editar usuario" : "Agregar usuario"}
      isOpen={isModalOpen}
      handleOk={() => handleClose()}
      handleClose={handleClose}
      footer={[
        <Button type="primary" form="formUser" key="submit" htmlType="submit">
          {user ? "Editar usuario" : "Agregar usuario"}
        </Button>,
      ]}
    >
      <Form
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
        name="formUser"
        initialValues={user ? user : undefined}
        onFinish={(values) => handleFinish(values, user)}
        onFinishFailed={handleFinishFailed}
      >
        <div className="container">
          <label htmlFor="username">Usuario</label>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Ingresar nombre de usuario valido" },
            ]}
          >
            <Input id="username" placeholder="johndoe" value={user?.username} />
          </Form.Item>
        </div>

        <div className="container">
          <label htmlFor="email">Email</label>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Ingresar email valido" },
              {
                type: "email",
                message: "El email no es valido",
              },
            ]}
          >
            <Input
              id="email"
              type="email"
              placeholder="johndoe@domain.com"
              value={user?.email}
            />
          </Form.Item>
        </div>

        <div className="container">
          <label htmlFor="name">Nombre</label>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Ingresar nombre valido" }]}
          >
            <Input id="name" placeholder="John" value={user?.name} />
          </Form.Item>
        </div>

        <div className="container">
          <label htmlFor="lastname">Apellido</label>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Ingresar apellido valido" }]}
          >
            <Input id="lastname" placeholder="Doe" value={user?.lastname} />
          </Form.Item>
        </div>

        <div className="container">
          <label htmlFor="status">Estado</label>
          <Form.Item
            name="status"
            rules={[{ required: true, message: "Seleccionar un estado" }]}
          >
            <Select
              id="status"
              placeholder="Seleccionar un estado"
              value={user?.status}
              options={[
                {
                  value: "active",
                  label: "Activo",
                },
                {
                  value: "inactive",
                  label: "Inactivo",
                },
              ]}
            />
          </Form.Item>
        </div>

        <div className="container">
          <label htmlFor="age">Edad</label>
          <Form.Item
            name="age"
            rules={[
              { required: true, message: "Ingresar edad valida" },
              {
                type: "number",
                message: "La edad no es valida!",
              },
              {
                type: "number",
                min: 1,
                max: 100,
                message: "La edad debe ser entre 1 y 100",
              },
            ]}
          >
            <InputNumber
              id="age"
              placeholder="43"
              style={{ width: "100%" }}
              value={user?.age}
            />
          </Form.Item>
        </div>
      </Form>
    </ModalComponent>
  );
};

export default FormUserModal;
