import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <nav className="bg-blue-700 text-zinc-100 dark:bg-zinc-950">
        <NavBar />
      </nav>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
