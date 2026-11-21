import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { SiSteam, SiPlaystation, SiXbox, SiNintendoswitch } from "react-icons/si";
import { FiClock } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/logo.svg";

interface LandingNavProps {
  onSkipToGames: () => void;
}

const LandingNav = ({ onSkipToGames }: LandingNavProps) => {
  const { isDark, toggle } = useTheme();
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative z-40 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
      {/* Brand Logo & Tagline */}
      <div className="flex items-center gap-3.5">
        <div className="relative group cursor-pointer" onClick={onSkipToGames}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-1 border border-cyan-500/40 shadow-md shadow-cyan-500/20 group-hover:scale-105 group-hover:border-cyan-400 transition-all flex items-center justify-center">
            <img
              src={logo}
              alt="CLUTCH IT Mark"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-white dark:border-[#05070D]" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-black tracking-widest uppercase text-zinc-950 dark:text-white font-mono flex items-center gap-1.5 transition-colors">
            CLUTCH IT <span className="text-cyan-600 dark:text-cyan-400 text-xs">//</span> ARCHIVE
          </span>
          <span className="text-[10px] font-mono tracking-wider text-zinc-600 dark:text-[#A1A8B8] font-semibold uppercase transition-colors">
            Next-Gen Game Discovery
          </span>
        </div>
      </div>

      {/* Quick Telemetry, Theme Toggle & Skip To Games */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Real Live Time Pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B0F1A] border border-slate-300 dark:border-white/10 text-[10px] font-mono text-zinc-700 dark:text-zinc-400 font-semibold shadow-sm transition-colors">
          <FiClock className="text-cyan-600 dark:text-cyan-400 text-xs" />
          <span>{liveTime || "00:00:00"} UTC</span>
        </div>

        {/* Platform Quick Badges */}
        <div className="hidden lg:flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm border-r border-slate-300 dark:border-white/10 pr-4">
          <SiSteam className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="Steam" />
          <SiPlaystation className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="PlayStation" />
          <SiXbox className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="Xbox" />
          <SiNintendoswitch className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="Nintendo" />
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggle}
          aria-label="Toggle light and dark mode"
          className="relative h-9 px-3 flex items-center gap-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0B0F1A] dark:hover:bg-[#111726] border border-slate-300 dark:border-white/10 text-zinc-800 dark:text-zinc-300 transition-all duration-200 group cursor-pointer shadow-sm"
        >
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
              className={`w-4 h-4 absolute transition-all duration-300 text-amber-500 dark:text-amber-400 ${
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
              className={`w-4 h-4 absolute transition-all duration-300 text-cyan-600 dark:text-cyan-400 ${
                !isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
              }`}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>

          <span className="hidden sm:inline font-mono text-[11px] font-bold text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors uppercase">
            {isDark ? "Dark" : "Light"}
          </span>
        </button>

        {/* REQUIRED: SKIP TO GAMES link in nav only */}
        <button
          onClick={onSkipToGames}
          className="group flex items-center gap-2 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0B0F1A] dark:hover:bg-[#111726] border border-slate-300 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 text-zinc-900 dark:text-zinc-300 hover:text-cyan-700 dark:hover:text-white transition-all duration-200 cursor-pointer shadow-sm font-bold"
        >
          <span>Skip to Games</span>
          <BsArrowRight className="group-hover:translate-x-1 text-cyan-600 dark:text-cyan-400 transition-transform" />
        </button>
      </div>
    </header>
  );
};

export default LandingNav;
