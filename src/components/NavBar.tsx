import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <nav className="flex items-center justify-between w-full p-4 col-span-2">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <div className="text-lg font-semibold">Video Game Hub</div>
      </div>
      <button
        onClick={() => {
          console.log("clicked");
          setDarkMode((prev) => !prev);
        }}
        className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-300 dark:text-black rounded"
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default NavBar;
