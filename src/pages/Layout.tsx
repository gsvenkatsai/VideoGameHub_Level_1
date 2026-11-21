import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-zinc-900 dark:bg-[#000000] dark:text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black transition-colors duration-200">
      {/* Global Cyber Background Effects for dark mode */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden dark:block">
        {/* Ambient Radial Flares */}
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-indigo-600/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-t from-violet-600/10 via-purple-600/5 to-transparent blur-[150px] rounded-full" />

        {/* Subtle Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
            backgroundSize: `48px 48px`,
          }}
        />
      </div>

      {/* Sticky frosted glass navbar with proper light/dark styling */}
      <nav className="sticky top-0 z-50 bg-white/95 text-zinc-900 border-b border-zinc-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:bg-[#07080a]/90 dark:text-white dark:border-white/[0.08] dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors duration-200">
        <NavBar />
      </nav>

      <Box className="relative z-10">
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
