import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-800 dark:text-white">
        <nav className="min-[450px]:col-span-2 bg-blue-500 text-white dark:bg-gray-900 dark:text-white">
          <NavBar />
        </nav>
        <Box>
          <Outlet />
        </Box>
      </div>
    </>
  );
};

export default Layout;
