/**
 * The `SearchFilters` component in TypeScript React renders search and filter inputs for users with
 * functionality to update filters and fetch users based on the selected criteria.
 * @returns The `SeachFilters` component is being returned. It consists of an input field for searching
 * users and a select dropdown for filtering users by status. The component uses the Ant Design library
 * components like `Input`, `Space`, and `Select`. The component also utilizes custom hooks from the
 * `usersStore` to manage state related to filters and fetching users.
 */

import { useEffect } from "react";
import { Input, Space, Select } from "antd";
import { useUsersStore } from "../../store/usersStore";

const SeachFilters = () => {
  const { Search } = Input;
  const filters = useUsersStore((state) => state.filters);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);
  const setFilters = useUsersStore((state) => state.setFilters);
  const setCurrentPage = useUsersStore((state) => state.setCurrentPage);

  useEffect(() => {
    setCurrentPage(1);
    fetchUsers();
  }, [filters]);

  const onSearch = (value: string) => {
    setFilters({
      ...filters,
      name: value,
    });
  };

  const handleChange = (value: string) => {
    setFilters({
      ...filters,
      status: value,
    });
  };

  return (
    <Space direction="horizontal">
      <Search
        placeholder="Buscar usuarios"
        onSearch={onSearch}
        style={{ width: 290 }}
      />

      <Select
        placeholder="Filtrar por estado"
        style={{ width: 210 }}
        onChange={handleChange}
        options={[
          {
            value: "all",
            label: "Todos",
          },
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
    </Space>
  );
};

export default SeachFilters;
