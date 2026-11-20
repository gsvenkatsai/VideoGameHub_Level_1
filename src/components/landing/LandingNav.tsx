import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { SiSteam, SiPlaystation, SiXbox, SiNintendoswitch } from "react-icons/si";
import { FiClock } from "react-icons/fi";
import logo from "../../assets/logo.png";

interface LandingNavProps {
  onSkipToGames: () => void;
}

const LandingNav = ({ onSkipToGames }: LandingNavProps) => {
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
    <header className="relative z-40 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
      {/* Brand Logo & Tagline */}
      <div className="flex items-center gap-3.5">
        <div className="relative group cursor-pointer" onClick={onSkipToGames}>
          <img
            src={logo}
            alt="Clutch It Mascot"
            className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform"
          />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-[#05070D] animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-[#05070D]" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-black tracking-widest uppercase text-white font-mono flex items-center gap-1.5">
            CLUTCH IT <span className="text-cyan-400 text-xs">//</span> ARCHIVE
          </span>
          <span className="text-[10px] font-mono tracking-wider text-[#A1A8B8] uppercase">
            Next-Gen Game Discovery
          </span>
        </div>
      </div>

      {/* Quick Telemetry & Skip To Games */}
      <div className="flex items-center gap-5">
        {/* Real Live Time Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F1A] border border-white/10 text-[10px] font-mono text-zinc-400">
          <FiClock className="text-cyan-400 text-xs" />
          <span>{liveTime || "00:00:00"} UTC</span>
        </div>

        {/* Platform Quick Badges */}
        <div className="hidden sm:flex items-center gap-3 text-zinc-500 text-sm border-r border-white/10 pr-5">
          <SiSteam className="hover:text-white transition-colors" title="Steam" />
          <SiPlaystation className="hover:text-white transition-colors" title="PlayStation" />
          <SiXbox className="hover:text-white transition-colors" title="Xbox" />
          <SiNintendoswitch className="hover:text-white transition-colors" title="Nintendo" />
        </div>

        {/* REQUIRED: SKIP TO GAMES link in nav only */}
        <button
          onClick={onSkipToGames}
          className="group flex items-center gap-2 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-xl bg-[#0B0F1A] hover:bg-[#111726] border border-white/10 hover:border-cyan-400/50 text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer shadow-md"
        >
          <span>Skip to Games</span>
          <BsArrowRight className="group-hover:translate-x-1 text-cyan-400 transition-transform" />
        </button>
      </div>
    </header>
  );
};

export default LandingNav;
