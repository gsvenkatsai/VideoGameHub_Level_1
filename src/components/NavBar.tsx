import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between w-full p-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <span className="text-lg font-semibold text-zinc-100">
          Video Game Hub
        </span>
      </div>
      <div className="flex gap-4">
        <SearchInput />
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="px-4 py-2 rounded bg-zinc-700 text-zinc-100 hover:bg-zinc-600 transition-colors"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
