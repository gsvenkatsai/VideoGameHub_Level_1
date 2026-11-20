import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SiSteam, SiPlaystation, SiXbox } from "react-icons/si";
import { FiTrendingUp, FiAward, FiPlay } from "react-icons/fi";
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
        <div className="font-mono text-[11px] tracking-widest uppercase text-cyan-400 font-bold flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          SECTION 05 // WORKFLOW
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          Three Steps to Your Next Fix
        </h2>
        <p className="text-sm text-[#A1A8B8] mt-2 max-w-lg mx-auto">
          No algorithmic dark patterns or pay-to-win recommendations. Just pure filtered telemetry.
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Animated Connecting Line Across Steps (Desktop) */}
        <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-0.5 z-0 pointer-events-none">
          {/* Base Track */}
          <div className="w-full h-full bg-white/10" />
          {/* Animated Glowing Fill */}
          <motion.div
            style={{ scaleX: smoothProgress, transformOrigin: "left" }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
          />
        </div>

        {/* STEP 1: Pick Platform */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B0F1A] border border-white/[0.08] shadow-lg group hover:border-cyan-400/40 transition-colors">
          {/* Step Number Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#111726] border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-mono font-black text-lg mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:scale-110 transition-transform">
            01
          </div>

          <h3 className="text-xl font-bold text-white mb-2">1. Pick Platform</h3>
          <p className="text-xs text-[#A1A8B8] leading-relaxed mb-6">
            Isolate by PC Steam, PlayStation 5, Xbox Series, Nintendo Switch, or Mobile in one click.
          </p>

          {/* Looping Mini UI Illustration */}
          <div className="w-full h-24 rounded-xl bg-black/50 border border-white/5 p-3 flex items-center justify-center gap-3">
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
                      ? "bg-cyan-500/15 border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)] animate-pulse"
                      : "bg-white/[0.02] border-white/10 text-zinc-500"
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
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B0F1A] border border-white/[0.08] shadow-lg group hover:border-violet-400/40 transition-colors">
          {/* Step Number Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#111726] border border-violet-400/30 flex items-center justify-center text-violet-400 font-mono font-black text-lg mb-6 shadow-[0_0_20px_rgba(199,125,255,0.15)] group-hover:scale-110 transition-transform">
            02
          </div>

          <h3 className="text-xl font-bold text-white mb-2">2. Sort by Metacritic</h3>
          <p className="text-xs text-[#A1A8B8] leading-relaxed mb-6">
            Rank by certified Metacritic reviews, added popularity, or release dates.
          </p>

          {/* Looping Mini UI Illustration */}
          <div className="w-full h-24 rounded-xl bg-black/50 border border-white/5 p-3 flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              <span className="flex items-center gap-1.5">
                <FiAward /> Metacritic Rank
              </span>
              <span className="font-bold">90+</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 font-mono text-xs">
              <span className="flex items-center gap-1.5">
                <FiTrendingUp /> Popularity
              </span>
              <span>22K+ added</span>
            </div>
          </div>
        </div>

        {/* STEP 3: Dive In */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B0F1A] border border-white/[0.08] shadow-lg group hover:border-cyan-400/40 transition-colors">
          {/* Step Number Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#111726] border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-mono font-black text-lg mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:scale-110 transition-transform">
            03
          </div>

          <h3 className="text-xl font-bold text-white mb-2">3. Dive In</h3>
          <p className="text-xs text-[#A1A8B8] leading-relaxed mb-6">
            Watch official gameplay trailers, inspect screenshots, and discover publishers.
          </p>

          {/* Looping Mini UI Illustration */}
          <div className="w-full h-24 rounded-xl bg-black/50 border border-white/5 p-3 flex items-center justify-center gap-2">
            <div className="relative w-full h-full rounded-lg bg-gradient-to-r from-cyan-900/30 to-violet-900/30 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg animate-bounce">
                <FiPlay className="ml-0.5" />
              </div>
              <div className="absolute bottom-1 right-2 font-mono text-[9px] text-zinc-400 flex items-center gap-1">
                <IoGameController /> 4K 60FPS
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
