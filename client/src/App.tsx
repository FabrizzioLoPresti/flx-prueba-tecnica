import "./App.css";
import { Suspense, lazy } from "react";
import { Layout } from "antd";
import Navbar from "./components/Layout/navbar";
import BreadcrumbComponent from "./components/Layout/breadcrumb";
import UsersTable from "./components/Users/users-table";
import SeachFilters from "./components/Users/search-filters";
import AddUserButton from "./components/Users/add-user-button";
import Spinner from "./components/Layout/spinner";
import { useUsersStore } from "./store/usersStore";

const FormUserModal = lazy(() => import("./components/Users/form-user-modal"));
const DeleteUserModal = lazy(
  () => import("./components/Users/delete-user-modal")
);

function App() {
  const { Content } = Layout;
  const modalType = useUsersStore((state) => state.modalType);
  return (
    <>
      <Navbar />
      <Layout className="layout" style={{ backgroundColor: "white" }}>
        <Content
          style={{
            padding: "20px 90px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <BreadcrumbComponent />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SeachFilters />
            <AddUserButton />
          </div>

          {modalType === "createEdit" && (
            <Suspense fallback={<Spinner />}>
              <FormUserModal />
            </Suspense>
          )}
          {modalType === "delete" && (
            <Suspense fallback={<Spinner />}>
              <DeleteUserModal />
            </Suspense>
          )}

          <main className="site-layout-content">
            <UsersTable />
          </main>
        </Content>
      </Layout>
    </>
  );
}

export default App;
