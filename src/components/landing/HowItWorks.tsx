import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SiSteam, SiPlaystation, SiXbox } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="font-mono text-[11px] tracking-widest uppercase text-cyan-600 dark:text-cyan-400 font-bold flex items-center justify-center gap-2 mb-2 transition-colors">
          <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
          SECTION 05 // WORKFLOW
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors">
          Three Steps to Your Next Fix
        </h2>
        <p className="text-sm text-zinc-600 dark:text-[#A1A8B8] mt-2 max-w-lg mx-auto transition-colors">
          No algorithmic dark patterns or pay-to-win recommendations. Just pure filtered telemetry.
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Animated Connecting Line Across Steps (Desktop) */}
        <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-0.5 z-0 pointer-events-none">
          {/* Base Track */}
          <div className="w-full h-full bg-zinc-200 dark:bg-white/10 transition-colors" />
          {/* Animated Glowing Fill */}
          <motion.div
            style={{ scaleX: smoothProgress, transformOrigin: "left" }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
          />
        </div>

        {/* STEP 1: Pick Platform */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#0B0F1A] border border-zinc-200 dark:border-white/[0.08] shadow-md dark:shadow-lg group hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-200">
          {/* Step Number Badge */}
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-[#111726] border border-cyan-500/30 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono font-black text-lg mb-6 shadow-sm group-hover:scale-110 transition-transform">
            01
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors">1. Pick Platform</h3>
          <p className="text-xs text-zinc-600 dark:text-[#A1A8B8] leading-relaxed mb-6 transition-colors">
            Isolate by PC Steam, PlayStation 5, Xbox Series, Nintendo Switch, or Mobile in one click.
          </p>

          {/* Looping Mini UI Illustration */}
          <div className="w-full h-24 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 p-3 flex items-center justify-center gap-3">
            {[
              { icon: SiSteam, name: "PC", active: true },
              { icon: SiPlaystation, name: "PS5", active: false },
              { icon: SiXbox, name: "XBOX", active: false },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-mono transition-all duration-300 ${
                    p.active
                      ? "bg-cyan-500/15 border-cyan-500/60 dark:border-cyan-400/60 text-cyan-700 dark:text-cyan-300 shadow-sm animate-pulse font-bold"
                      : "bg-white dark:bg-white/[0.02] border-zinc-200 dark:border-white/10 text-zinc-400 dark:text-zinc-500"
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="text-[10px]">{p.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Sort by Score or Popularity */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#0B0F1A] border border-zinc-200 dark:border-white/[0.08] shadow-md dark:shadow-lg group hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-all duration-200">
          {/* Step Number Badge */}
          <div className="w-14 h-14 rounded-2xl bg-violet-50 dark:bg-[#111726] border border-violet-500/30 dark:border-violet-400/30 flex items-center justify-center text-violet-600 dark:text-violet-400 font-mono font-black text-lg mb-6 shadow-sm group-hover:scale-110 transition-transform">
            02
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors">2. Sort by Metacritic</h3>
          <p className="text-xs text-zinc-600 dark:text-[#A1A8B8] leading-relaxed mb-6 transition-colors">
            Rank by certified Metacritic reviews, added popularity, or release dates.
          </p>

          {/* Looping Mini UI Illustration */}
          <div className="w-full h-24 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 p-3 flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-700 dark:text-zinc-300 px-1">
              <span className="flex items-center gap-1.5 font-bold">
                <FiAward className="text-violet-500 dark:text-violet-400" /> TOP RATED
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">95+</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 w-[95%]" />
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 px-1">
              <span>RANK 01-100</span>
              <span>FILTERED CONSENSUS</span>
            </div>
          </div>
        </div>

        {/* STEP 3: Dive In & Clutch */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#0B0F1A] border border-zinc-200 dark:border-white/[0.08] shadow-md dark:shadow-lg group hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-200">
          {/* Step Number Badge */}
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-[#111726] border border-emerald-500/30 dark:border-emerald-400/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-black text-lg mb-6 shadow-sm group-hover:scale-110 transition-transform">
            03
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors">3. Dive In & Clutch</h3>
          <p className="text-xs text-zinc-600 dark:text-[#A1A8B8] leading-relaxed mb-6 transition-colors">
            Inspect screenshots, developer logs, publisher records, and official store links.
          </p>

          {/* Looping Mini UI Illustration */}
          <div className="w-full h-24 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 p-3 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
              <IoGameController className="text-base" />
              <span>GAME HUB READY</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
