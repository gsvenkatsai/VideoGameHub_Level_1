import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IoGameController } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../assets/logo.svg";

interface ClosingCTAProps {
  onExploreGames: () => void;
}

const ClosingCTA = ({ onExploreGames }: ClosingCTAProps) => {
  const prefersReducedMotion = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagneticOffset({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-200/80 dark:from-[#05070D] dark:via-[#080B14] dark:to-[#05070D] border-t border-slate-300 dark:border-white/[0.06] transition-colors duration-200">
      {/* Background Mascot Subtle Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] dark:opacity-[0.08] blur-[1px]">
        <img
          src={logo}
          alt="CLUTCH IT Mark"
          className="w-[400px] h-[400px] object-contain filter drop-shadow-[0_0_80px_rgba(34,211,238,0.5)]"
        />
      </div>

      {/* Atmospheric Radial Flares */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-transparent blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="font-mono text-xs tracking-widest uppercase text-cyan-700 dark:text-cyan-400 font-extrabold mb-4 flex items-center gap-2 transition-colors">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
          SYSTEM OPERATIONAL // LEVEL 1
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white leading-none transition-colors">
          READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#4F46E5] to-[#9333EA] dark:from-[#22D3EE] dark:via-[#818CF8] dark:to-[#C084FC]">CLUTCH?</span>
        </h2>

        <p className="mt-5 text-sm sm:text-base text-zinc-700 dark:text-[#A1A8B8] font-medium max-w-xl leading-relaxed transition-colors">
          Over 500,000 releases indexed and verified. Jump directly into the full catalogue with instant search, platform toggles, and Metacritic rankings.
        </p>

        {/* Big Magnetic Primary CTA Button */}
        <div className="mt-10">
          <motion.button
            ref={btnRef}
            onClick={onExploreGames}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              x: magneticOffset.x,
              y: magneticOffset.y,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="group relative flex items-center justify-center gap-4 px-10 py-5 rounded-xl bg-gradient-to-r from-[#22D3EE] via-[#60A5FA] to-[#C77DFF] text-[#05070D] font-mono font-black text-sm tracking-widest uppercase shadow-[0_4px_25px_rgba(34,211,238,0.35)] dark:shadow-[0_0_40px_rgba(34,211,238,0.45)] hover:shadow-[0_6px_35px_rgba(34,211,238,0.55)] dark:hover:shadow-[0_0_60px_rgba(34,211,238,0.7)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center text-[#05070D]">
              <IoGameController className="text-base" />
            </div>
            <span>LAUNCH ARCHIVE NOW</span>
            <BsArrowRight className="text-base group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
