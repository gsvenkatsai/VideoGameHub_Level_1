import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="min-[450px]:col-span-2 p-4 bg-blue-500 text-white dark:bg-gray-900 dark:text-white">
        <NavBar />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
