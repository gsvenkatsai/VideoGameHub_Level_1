import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/games");
        }
      }}
      className="relative group"
    >
      <div className="relative flex items-center">
        {/* Search Icon */}
        <FaSearch
          size={12}
          className="absolute left-3.5 text-zinc-400 group-focus-within:text-cyan-400 transition-colors pointer-events-none z-10"
        />

        {/* Command-Palette Style Input */}
        <input
          ref={ref}
          type="text"
          placeholder="Search 500K+ games..."
          className="pl-9 pr-12 py-1.5 w-56 sm:w-72 group-focus-within:w-64 sm:group-focus-within:w-88 rounded-xl text-xs font-mono bg-zinc-100 text-zinc-900 placeholder-zinc-400 border border-zinc-200/90 shadow-sm focus:outline-none focus:border-cyan-500 focus:bg-white dark:bg-[#0c0d10]/90 dark:text-white dark:placeholder-zinc-500 dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.5)] dark:focus:border-cyan-400/80 dark:focus:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300"
        />

        {/* Enter key badge */}
        <span className="absolute right-2.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500 border border-zinc-300 bg-zinc-200/80 dark:border-zinc-800 dark:bg-zinc-900 pointer-events-none group-focus-within:border-cyan-500/50 group-focus-within:text-cyan-500 dark:group-focus-within:text-cyan-400 transition-colors">
          ↵
        </span>
      </div>
    </form>
  );
};

export default SearchInput;
