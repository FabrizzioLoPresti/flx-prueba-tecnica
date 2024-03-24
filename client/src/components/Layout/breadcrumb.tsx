/**
 * The BreadcrumbComponent function renders a breadcrumb navigation with two items for "Usuarios" and
 * "Listado de Usuarios".
 * @returns The BreadcrumbComponent functional component is being returned. It renders a Breadcrumb
 * component from the Ant Design library with two Breadcrumb.Item components inside it. The text
 * displayed for the Breadcrumb items are "Usuarios" and "Listado de Usuarios" respectively.
 */

import { Breadcrumb } from "antd";

const BreadcrumbComponent = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Usuarios</Breadcrumb.Item>
      <Breadcrumb.Item>Listado de Usuarios</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
