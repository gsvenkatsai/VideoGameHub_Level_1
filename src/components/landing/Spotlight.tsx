import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { LOCAL_GAMES } from "../../Data/localGames";
import { extractDominantColor } from "../../hooks/useLandingGames";
import PlatfromIconList from "../PlatfromIconList";
import GameCoverImage from "../common/GameCoverImage";

// Pick top 6 local games for the spotlight carousel
const SPOTLIGHT_ROSTER = LOCAL_GAMES.slice(0, 6);

const Spotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [accentColor, setAccentColor] = useState(SPOTLIGHT_ROSTER[0].accentColor);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const activeGame = SPOTLIGHT_ROSTER[currentIndex];

  // Auto-rotate every 8 seconds (pausable on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SPOTLIGHT_ROSTER.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Update dynamic dominant color when game changes
  useEffect(() => {
    let isMounted = true;
    extractDominantColor(activeGame.background_image, activeGame.accentColor).then((color) => {
      if (isMounted) setAccentColor(color);
    });
    return () => {
      isMounted = false;
    };
  }, [activeGame]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SPOTLIGHT_ROSTER.length) % SPOTLIGHT_ROSTER.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SPOTLIGHT_ROSTER.length);
  };

  // Metacritic colors convention
  const score = activeGame.metacritic;
  const isHigh = score >= 75;
  const isMed = score >= 50 && score < 75;
  const scoreColor = isHigh ? "#22C55E" : isMed ? "#EAB308" : "#EF4444";

  // SVG ring stroke computation
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (score / 100) * circumference;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-2 mb-2 transition-colors">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            SECTION 02 // FEATURED SPOTLIGHT
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white transition-colors">
            Curator's Choice Archive
          </h2>
        </div>

        {/* Manual navigation arrows & cycle dots */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-2">
            {SPOTLIGHT_ROSTER.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-6 bg-cyan-500 dark:bg-cyan-400" : "w-2 bg-zinc-300 dark:bg-white/20 hover:bg-zinc-400 dark:hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-xl bg-white hover:bg-zinc-100 dark:bg-[#0B0F1A] dark:hover:bg-[#111726] border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/30 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label="Previous game"
          >
            <FiChevronLeft className="text-base" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-xl bg-white hover:bg-zinc-100 dark:bg-[#0B0F1A] dark:hover:bg-[#111726] border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/30 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label="Next game"
          >
            <FiChevronRight className="text-base" />
          </button>
        </div>
      </div>

      {/* Main Wide Card */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative rounded-2xl sm:rounded-[24px] bg-white dark:bg-[#0B0F1A] border border-zinc-200 dark:border-white/[0.08] p-4 sm:p-8 lg:p-10 overflow-hidden shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] transition-all duration-700"
      >
        {/* Dynamic Contextual Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-25 dark:opacity-35 transition-colors duration-1000"
          style={{ backgroundColor: accentColor }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Cover Art with Ken Burns slow zoom */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-zinc-200 dark:border-white/10 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGame.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{
                  opacity: 1,
                  scale: prefersReducedMotion ? 1 : [1, 1.05],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  scale: { duration: 8, ease: "linear", repeat: Infinity, repeatType: "reverse" },
                  opacity: { duration: 0.4 },
                }}
                className="w-full h-full"
              >
                <GameCoverImage
                  src={activeGame.background_image}
                  alt={activeGame.name}
                  fallbackTitle={activeGame.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* In-Image Tag */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest uppercase text-white">
              <FiStar className="text-amber-400" /> {activeGame.tagline || "TOP-RATED BENCHMARK"}
            </div>
          </div>

          {/* Right: Telemetry & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGame.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-5"
              >
                {/* Year + Genres */}
                <div className="flex items-center flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    {activeGame.released.slice(0, 4)}
                  </span>
                  {activeGame.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-white/5 border border-cyan-200 dark:border-white/10 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Game Title */}
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight transition-colors">
                  {activeGame.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-[#A1A8B8] leading-relaxed line-clamp-3 transition-colors">
                  {activeGame.description_raw}
                </p>

                {/* Platform Support */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    VERIFIED PLATFORMS
                  </span>
                  {activeGame.parent_platforms && (
                    <PlatfromIconList
                      platforms={activeGame.parent_platforms.map((p) => p.platform)}
                    />
                  )}
                </div>

                {/* Animated Metacritic Ring & CTA Row */}
                <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between gap-4">
                  {/* Circular Gauge */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 76 76">
                        <circle
                          cx="38"
                          cy="38"
                          r={radius}
                          stroke="currentColor"
                          className="text-zinc-200 dark:text-white/[0.08]"
                          strokeWidth="6"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="38"
                          cy="38"
                          r={radius}
                          stroke={scoreColor}
                          strokeWidth="6"
                          strokeLinecap="round"
                          fill="transparent"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset: strokeOffset }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </svg>
                      <span className="absolute font-mono font-black text-sm text-zinc-900 dark:text-white">
                        {score}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-zinc-900 dark:text-white font-mono">
                        METACRITIC
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        {isHigh ? "UNIVERSAL ACCLAIM" : "GENERALLY FAVORABLE"}
                      </span>
                    </div>
                  </div>

                  {/* Open in Archive Action */}
                  <button
                    onClick={() => navigate(`/game/${activeGame.id}`)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20 border border-zinc-900 dark:border-white/20 hover:border-cyan-500 dark:hover:border-cyan-400 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md group"
                  >
                    <span>OPEN IN ARCHIVE</span>
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
