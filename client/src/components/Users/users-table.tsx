/* This code snippet is a React component called `UsersTable` that displays a table of users. Here's a
breakdown of what the code is doing: */

import { useEffect } from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserType } from "../../types/types";
import { useUsersStore } from "../../store/usersStore";

const UsersTable = () => {
  const users = useUsersStore((state) => state.users);
  const totalUsers = useUsersStore((state) => state.totalUsers);
  const loading = useUsersStore((state) => state.loading);
  const currentPage = useUsersStore((state) => state.currentPage);
  const pageSize = useUsersStore((state) => state.pageSize);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);
  const setUser = useUsersStore((state) => state.setUser);
  const setCurrentPage = useUsersStore((state) => state.setCurrentPage);
  const toggleModal = useUsersStore((state) => state.toggleModal);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, currentPage, pageSize]);

  const handleEdit = (user: UserType) => () => {
    setUser(user);
    toggleModal("createEdit");
  };
  const handleDelete = (userDelete: UserType) => () => {
    setUser(userDelete);
    toggleModal("delete");
  };

  const columns: ColumnsType<UserType> = [
    {
      title: "Usuario",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status === "active" ? "Activo" : "Inactivo"}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={handleEdit(record)}>
            Editar
          </Button>
          <Button type="link" onClick={handleDelete(record)}>
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      loading={loading}
      pagination={{
        total: totalUsers,
        current: currentPage,
        pageSize: pageSize,
        showSizeChanger: false,
        onChange: (page) => {
          setCurrentPage(page);
        },
      }}
    />
  );
};

export default UsersTable;
