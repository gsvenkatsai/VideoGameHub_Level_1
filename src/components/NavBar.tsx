import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { IoGameController, IoFlash } from "react-icons/io5";

const NavBar = () => {
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isGames = location.pathname.startsWith("/games") || location.pathname.startsWith("/game/");
  const isGenres = location.pathname === "/genres";

  return (
    <nav className="relative flex items-center justify-between w-full px-4 sm:px-8 py-3">
      {/* Ambient Top Laser Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

      {/* LEFT: Futuristic Brand Badge */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Glowing Logo Frame */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-500/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
              <img
                src={logo}
                alt="CLUTCH IT"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Live Status Radar Pip */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 border border-black" />
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black tracking-widest uppercase font-mono text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                CLUTCH IT
              </span>
              <span className="text-[10px] font-mono font-bold text-cyan-500 dark:text-cyan-400">// OS</span>
            </div>
            <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase -mt-0.5 hidden sm:block">
              Gaming Discovery Engine
            </span>
          </div>
        </Link>
      </div>

      {/* CENTER: Console-Style Mode Switcher Capsule */}
      <div className="hidden md:flex items-center p-1 rounded-xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm dark:bg-[#0b0c0f]/90 dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
        <Link
          to="/"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
            isHome
              ? "bg-white text-zinc-900 font-bold shadow-sm border border-zinc-300 dark:bg-white/15 dark:text-white dark:border-white/15 dark:shadow-[0_0_12px_rgba(255,255,255,0.1)]"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.04]"
          }`}
        >
          <IoFlash className={`text-xs ${isHome ? "text-cyan-500 dark:text-cyan-400" : "text-zinc-400 dark:text-zinc-500"}`} />
          <span>Vault</span>
        </Link>

        <Link
          to="/games"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
            isGames
              ? "bg-cyan-500/15 text-cyan-900 font-bold border border-cyan-400/50 shadow-sm dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-indigo-500/20 dark:text-white dark:border-cyan-500/40 dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.04]"
          }`}
        >
          <IoGameController className={`text-sm ${isGames ? "text-cyan-600 dark:text-cyan-400" : "text-zinc-400 dark:text-zinc-500"}`} />
          <span>Games</span>
        </Link>

        <Link
          to="/genres"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
            isGenres
              ? "bg-violet-500/15 text-violet-900 font-bold border border-violet-400/50 shadow-sm dark:bg-gradient-to-r dark:from-indigo-500/20 dark:to-violet-500/20 dark:text-white dark:border-violet-500/40 dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.04]"
          }`}
        >
          <span className={`text-xs ${isGenres ? "text-violet-600 dark:text-violet-400" : "text-zinc-400 dark:text-zinc-500"}`}>◈</span>
          <span>Genres</span>
        </Link>
      </div>

      {/* RIGHT: Search + Live Status + High-Tech Toggle */}
      <div className="flex items-center gap-3">
        <SearchInput />

        {/* Live Status Telemetry Pill */}
        <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/90 text-[10px] font-mono tracking-wider text-zinc-600 dark:bg-[#0c0d10] dark:border-white/[0.08] dark:text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span>500K SYNCED</span>
        </div>

        {/* Interactive Theme Switcher Capsule */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="relative h-9 px-3 flex items-center gap-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-300/80 hover:border-zinc-400 text-zinc-700 shadow-sm dark:bg-[#0c0d10] dark:border-white/10 dark:hover:border-cyan-500/40 dark:hover:bg-[#14151a] dark:text-zinc-300 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-200 group cursor-pointer"
        >
          {/* Animated Icon */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            {/* Sun Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 absolute transition-all duration-300 text-amber-400 ${
                isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"
              }`}
            >
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>

            {/* Moon Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 absolute transition-all duration-300 text-cyan-400 ${
                !isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
              }`}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>

          <span className="hidden sm:inline font-mono text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors uppercase">
            {isDark ? "Dark" : "Light"}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
