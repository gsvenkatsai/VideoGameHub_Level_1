import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IoGameController } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import CoverWall from "./CoverWall";
import SearchPalette from "./SearchPalette";
import PlatformChips from "./PlatformChips";

interface HeroProps {
  onExploreGames: () => void;
  onBrowseGenres: () => void;
}

const Hero = ({ onExploreGames, onBrowseGenres }: HeroProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedPlatformId, setSelectedPlatformId] = useState<number>(0);
  const [hudPlatformReadout, setHudPlatformReadout] = useState("ALL PLATFORMS // 500,000+ TITLES");

  // Magnetic button ref & state
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  // Magnetic hover handler
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !primaryBtnRef.current) return;
    const rect = primaryBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Pull 4-6px toward cursor
    setMagneticOffset({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-10 pb-20 overflow-hidden bg-[#EFF2F6] dark:bg-[#05070D] transition-colors duration-200">
      {/* Film Grain & Scanlines Overlay (Hero only, 3-4% opacity) */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.025] dark:opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)`
        }}
      />

      {/* The Star: RAWG Cover Wall Background */}
      <CoverWall selectedPlatformId={selectedPlatformId} />

      {/* Hero Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto flex flex-col items-center text-center mt-6">
        
        {/* Ultra-Heavy Sans Headline (reveals line-by-line, 70ms stagger) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] max-w-4xl select-none">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="block text-zinc-950 dark:text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] transition-colors"
          >
            EVERY GAME.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="block text-zinc-950 dark:text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] transition-colors"
          >
            EVERY PLATFORM.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.19 }}
            className="block"
          >
            <span
              className="bg-gradient-to-r from-[#0284C7] via-[#4F46E5] to-[#9333EA] dark:from-[#38BDF8] dark:via-[#818CF8] dark:to-[#C084FC] bg-clip-text text-transparent inline-block font-black"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CLUTCH IT.
            </span>
          </motion.span>
        </h1>

        {/* High-Contrast Body Copy (WCAG AAA compliant: text-zinc-700 on light, text-[#A1A8B8] on dark) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-zinc-700 dark:text-[#A1A8B8] max-w-2xl font-medium leading-relaxed transition-colors"
        >
          Precision game discovery powered by the RAWG API. Search 500K+ releases, isolate platforms, examine Metacritic evidence, and find your next obsession.
        </motion.p>

        {/* Command Palette Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mt-8"
        >
          <SearchPalette />
        </motion.div>

        {/* Platform Chips (Filter cover wall + live HUD update) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <PlatformChips
            selectedPlatformId={selectedPlatformId}
            onSelectPlatform={(id, text) => {
              setSelectedPlatformId(id);
              setHudPlatformReadout(text);
            }}
          />

          {/* Active Platform Status Telemetry readout */}
          <div className="mt-3 font-mono text-[11px] tracking-widest uppercase text-cyan-800 dark:text-cyan-400 font-extrabold flex items-center justify-center gap-2 transition-colors">
            <FiLayers className="text-zinc-500 dark:text-zinc-400 text-xs" />
            <span>{hudPlatformReadout}</span>
          </div>
        </motion.div>

        {/* CTA BUTTONS: Solid Primary + Ghost Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* PRIMARY CTA: SOLID CYAN-TO-VIOLET GRADIENT, DARK TEXT, MAGNETIC HOVER */}
          <motion.button
            ref={primaryBtnRef}
            onClick={onExploreGames}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              x: magneticOffset.x,
              y: magneticOffset.y,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#22D3EE] via-[#60A5FA] to-[#C77DFF] text-[#05070D] font-mono font-black text-xs tracking-widest uppercase shadow-[0_4px_20px_rgba(34,211,238,0.35)] dark:shadow-[0_0_30px_rgba(34,211,238,0.4),0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_28px_rgba(34,211,238,0.5)] dark:hover:shadow-[0_0_45px_rgba(34,211,238,0.65),0_12px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 active:scale-[0.98] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-lg bg-black/20 flex items-center justify-center text-[#05070D]">
              <IoGameController className="text-sm" />
            </div>
            <span>EXPLORE GAMES</span>
            <BsArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          {/* SECONDARY CTA: GHOST OUTLINE */}
          <button
            onClick={onBrowseGenres}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 dark:bg-transparent dark:hover:bg-white/[0.04] border border-slate-300 dark:border-white/20 hover:border-violet-500 dark:hover:border-[#C77DFF]/60 text-zinc-900 dark:text-zinc-300 hover:text-black dark:hover:text-white font-mono font-bold text-xs tracking-widest uppercase backdrop-blur-sm transition-all duration-300 shadow-sm active:scale-[0.98] cursor-pointer"
          >
            <span className="text-violet-600 dark:text-[#C77DFF]">◈</span>
            <span>BROWSE GENRES</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
