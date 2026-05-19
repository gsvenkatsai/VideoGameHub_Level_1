import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const { toggle } = useTheme();

  return (
    <nav className="flex items-center justify-between w-full p-4">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </Link>
        <span className="text-lg font-semibold text-zinc-100">
          Video Game Hub
        </span>
      </div>
      <div className="flex gap-4">
        <SearchInput />
        <button
          onClick={toggle}
          className="px-4 py-2 rounded bg-zinc-700 text-zinc-100 hover:bg-zinc-600 transition-colors"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};
export default NavBar;