import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { SiSteam, SiPlaystation, SiXbox, SiNintendoswitch, SiApple, SiAndroid } from "react-icons/si";
import { FiCheck, FiFilter, FiTrendingUp } from "react-icons/fi";
import { LOCAL_GAMES } from "../../Data/localGames";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../store";
import GameCoverImage from "../common/GameCoverImage";
import getCroppedImageURL from "../../services/image-url";

// Cursor-following spotlight wrapper with 2-3deg tilt
const BentoCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 2-3 deg tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -2.5;
    const tiltY = ((x - centerX) / centerX) * 2.5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      className={`relative rounded-2xl sm:rounded-[20px] bg-white dark:bg-[#0B0F1A] border border-slate-200/90 dark:border-white/[0.07] overflow-hidden p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-xl group transition-colors duration-200 ${className}`}
    >
      {/* Cursor-tracking spotlight border highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.22), transparent 80%)`
            : "none",
        }}
      />
      <div className="relative z-20 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
};

const BentoGrid = () => {
  const navigate = useNavigate();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  // Metacritic verified count-up on scroll
  const metaRef = useRef<HTMLDivElement>(null);
  const isMetaInView = useInView(metaRef, { once: true, margin: "-50px" });
  const [metaCounts, setMetaCounts] = useState({ high: 0, med: 0, low: 0 });

  useEffect(() => {
    if (!isMetaInView) return;
    const duration = 1200;
    const startTime = performance.now();
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setMetaCounts({
        high: Math.floor(ease * 97),
        med: Math.floor(ease * 68),
        low: Math.floor(ease * 38),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isMetaInView]);

  // Mini demo filter loop simulation state
  const [simFilterIdx, setSimFilterIdx] = useState(0);
  const filterOptions = ["Action", "RPG", "Steam Only", "Metacritic 90+"];
  useEffect(() => {
    const timer = setInterval(() => {
      setSimFilterIdx((prev) => (prev + 1) % filterOptions.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Top 4 trending titles for the community velocity strip
  const trendingSelection = [
    LOCAL_GAMES[2], // RDR2
    LOCAL_GAMES[5], // God of War
    LOCAL_GAMES[6], // Cyberpunk
    LOCAL_GAMES[8], // Hollow Knight
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="font-mono text-[11px] tracking-widest uppercase text-cyan-700 dark:text-cyan-400 font-extrabold flex items-center justify-center sm:justify-start gap-2 mb-2 transition-colors">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
          SECTION 03 // ARCHIVE CAPABILITIES
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 dark:text-white transition-colors">
          Engineered for Deep Discovery
        </h2>
        <p className="text-sm text-zinc-700 dark:text-[#A1A8B8] font-medium mt-2 max-w-xl transition-colors">
          Everything you need to bypass marketing fluff and zero in on authentic gaming greatness.
        </p>
      </div>

      {/* Asymmetric 12-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* TILE A: LARGE "Vast Library" (col-span-12 md:col-span-7) */}
        <BentoCard className="md:col-span-7 min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-500/25 font-bold">
                DATASET SCALE
              </span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold">SYNCHRONIZED DAILY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 dark:text-white transition-colors">
              Vast Library: 500,000+ Titles
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#A1A8B8] font-medium mt-2 leading-relaxed max-w-md transition-colors">
              From historic 8-bit classics to day-one ray-traced blockbusters. Instant offline fallback backed by 20+ verified benchmarks.
            </p>
          </div>

          {/* Mini Marquee of Covers */}
          <div className="relative mt-6 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/40 p-2">
            <div className="flex gap-2.5 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {LOCAL_GAMES.slice(0, 10).map((game) => (
                <div
                  key={game.id}
                  className="w-20 sm:w-24 h-28 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 dark:border-white/10 relative shadow-sm"
                >
                  <GameCoverImage
                    src={getCroppedImageURL(game.background_image)}
                    alt={game.name}
                    fallbackTitle={game.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-[#0B0F1A] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-[#0B0F1A] to-transparent pointer-events-none" />
          </div>
        </BentoCard>

        {/* TILE B: "Every Platform" Orbit (col-span-12 md:col-span-5) */}
        <BentoCard className="md:col-span-5 min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-violet-500/10 text-violet-800 dark:text-violet-400 border border-violet-500/25 font-bold">
                ECOSYSTEM
              </span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold">6 CORE PLATFORMS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 dark:text-white transition-colors">
              Unified Across Every Machine
            </h3>
            <p className="text-xs text-zinc-700 dark:text-[#A1A8B8] font-medium mt-1.5 leading-relaxed transition-colors">
              Real platform icons. Seamless switching between PC, consoles, and handhelds.
            </p>
          </div>

          {/* Orbiting / Rotating Platform Cluster */}
          <div className="relative h-40 my-3 flex items-center justify-center">
            {/* Center Hub */}
            <div className="w-12 h-12 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500 dark:border-cyan-400 flex items-center justify-center text-cyan-800 dark:text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] z-10 font-bold">
              <span className="font-mono text-[10px] font-bold">ALL</span>
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_35s_linear_infinite]">
              {[
                { icon: SiSteam, name: "Steam", id: 1, angle: 0 },
                { icon: SiPlaystation, name: "PlayStation", id: 2, angle: 60 },
                { icon: SiXbox, name: "Xbox", id: 3, angle: 120 },
                { icon: SiNintendoswitch, name: "Switch", id: 7, angle: 180 },
                { icon: SiApple, name: "Apple", id: 4, angle: 240 },
                { icon: SiAndroid, name: "Android", id: 4, angle: 300 },
              ].map((p, idx) => {
                const IconComponent = p.icon;
                const rad = (p.angle * Math.PI) / 180;
                const x = Math.cos(rad) * 62;
                const y = Math.sin(rad) * 62;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setPlatformId(p.id);
                      navigate("/games");
                    }}
                    title={`Filter by ${p.name}`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="absolute w-9 h-9 rounded-xl bg-white dark:bg-[#111726] border border-slate-300 dark:border-white/15 hover:border-cyan-600 dark:hover:border-cyan-400 text-zinc-800 dark:text-zinc-300 hover:text-cyan-700 dark:hover:text-white flex items-center justify-center shadow-md transition-transform hover:scale-125 cursor-pointer"
                  >
                    <IconComponent className="text-sm" />
                  </button>
                );
              })}
            </div>
          </div>
        </BentoCard>

        {/* TILE C: "Metacritic Verified" (col-span-12 md:col-span-4) */}
        <BentoCard className="md:col-span-4 min-h-[260px]">
          <div ref={metaRef}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/25 font-bold">
                CRITIC RIGOR
              </span>
              <span className="font-mono text-[10px] text-zinc-500 font-semibold">RAWG INGESTED</span>
            </div>

            <h3 className="text-lg sm:text-xl font-black tracking-tight text-zinc-950 dark:text-white transition-colors">
              Metacritic Verified
            </h3>
            <p className="text-xs text-zinc-700 dark:text-[#A1A8B8] font-medium mt-1 transition-colors">
              Honest critic consensus. Scores ingested directly from Metacritic via RAWG API.
            </p>

            {/* 3 Sample Badges with count-up animation */}
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-300">RDR2 (Universal Acclaim)</span>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-black bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 tabular-nums">
                  {metaCounts.high}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-300">Mixed Reception</span>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-black bg-yellow-500/15 border border-yellow-500/40 text-yellow-700 dark:text-yellow-400 tabular-nums">
                  {metaCounts.med}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-300">Unfavorable Score</span>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-black bg-rose-500/15 border border-rose-500/40 text-rose-700 dark:text-rose-400 tabular-nums">
                  {metaCounts.low}
                </span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* TILE D: "Trending Now" with Amber #FFB020 Signature Badge (col-span-12 md:col-span-5) */}
        <BentoCard className="md:col-span-5 min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              {/* Signature Amber Badge */}
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-[#FFB020]/20 text-amber-800 dark:text-[#FFB020] border border-[#FFB020]/50 font-black shadow-[0_0_12px_rgba(255,176,32,0.2)]">
                <FiTrendingUp className="text-xs" /> HOT // TRENDING NOW
              </span>
              <span className="font-mono text-[10px] text-zinc-500 font-semibold">LIVE CYCLES</span>
            </div>

            <h3 className="text-lg sm:text-xl font-black tracking-tight text-zinc-950 dark:text-white transition-colors">
              Community Velocity
            </h3>
            <p className="text-xs text-zinc-700 dark:text-[#A1A8B8] font-medium mt-1 transition-colors">
              Top titles gaining traction across all archives this week.
            </p>

            {/* Strip of 4 Live titles */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {trendingSelection.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(`/game/${item.id}`)}
                  className="group/item flex flex-col text-left transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-slate-300 dark:border-white/10 group-hover/item:border-[#FFB020]/60 transition-colors shadow-sm">
                    <GameCoverImage
                      src={getCroppedImageURL(item.background_image)}
                      alt={item.name}
                      fallbackTitle={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-1 right-1 px-1 py-0.2 rounded bg-black/85 font-mono text-[9px] text-emerald-400 font-bold">
                      {item.metacritic}
                    </span>
                  </div>
                  <span className="mt-1 text-[10px] font-mono font-bold text-zinc-800 dark:text-zinc-300 truncate w-full group-hover/item:text-amber-700 dark:group-hover/item:text-[#FFB020] transition-colors">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* TILE E: "Filter in One Click" (col-span-12 md:col-span-3) */}
        <BentoCard className="md:col-span-3 min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-500/25 font-bold">
                SPEED
              </span>
              <FiFilter className="text-cyan-700 dark:text-cyan-400 text-xs" />
            </div>

            <h3 className="text-lg font-black tracking-tight text-zinc-950 dark:text-white transition-colors">
              Filter in One Click
            </h3>
            <p className="text-xs text-zinc-700 dark:text-[#A1A8B8] font-medium mt-1 transition-colors">Zero page reload latency.</p>

            {/* Looping Mini Demo UI */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-800 dark:text-zinc-400 font-bold">
                <span>ACTIVE FILTER:</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-black">
                  {filterOptions[simFilterIdx]}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  key={simFilterIdx}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.3, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 pt-1 font-bold">
                <FiCheck className="text-xs" /> 0.04s QUERY APPLIED
              </div>
            </div>

            <button
              onClick={() => {
                setGenreId(4); // Action
                navigate("/games");
              }}
              className="mt-4 w-full py-2 text-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-[10px] font-mono tracking-widest uppercase text-zinc-900 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors cursor-pointer font-bold"
            >
              LAUNCH WITH FILTERS →
            </button>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default BentoGrid;
