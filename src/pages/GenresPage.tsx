import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import { IoSparklesOutline, IoFlashOutline } from "react-icons/io5";

const GenresPage = () => {
  const { data, isLoading } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const navigate = useNavigate();

  const handleGenreClick = (id: number) => {
    setGenreId(id);
    navigate("/games");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header Banner */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-12 p-8 sm:p-12 border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-gradient-to-r dark:from-[#0c0d10]/95 dark:via-[#121318]/90 dark:to-[#0c0d10]/95 backdrop-blur-xl shadow-sm dark:shadow-[0_12px_40px_rgba(0,0,0,0.8)] text-center">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono tracking-widest uppercase text-cyan-500 dark:text-cyan-400 mb-4">
          <IoSparklesOutline className="text-xs" />
          <span>TAXONOMY ARCHIVE // ALL DOMAINS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
          EXPLORE GENRES
        </h1>

        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed">
          Select your battleground. Dive directly into curated archives across every gaming discipline.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <IoFlashOutline className="text-cyan-500 dark:text-cyan-400" /> {data?.results.length || 19} DISCIPLINES
          </span>
          <span>&bull;</span>
          <span>RAWG SYNCHRONIZED</span>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 py-6">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rotate-45 rounded-2xl bg-zinc-900 border border-white/5 animate-pulse mb-6" />
              <div className="h-4 bg-zinc-800 rounded w-20 animate-pulse mt-4" />
              <div className="h-3 bg-zinc-900 rounded w-14 animate-pulse mt-1" />
            </div>
          ))}
        </div>
      )}

      {/* Rhombus (Diamond) Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-14 py-6"
      >
        {data?.results.map((genre, index) => (
          <motion.div
            key={genre.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            onClick={() => handleGenreClick(genre.id)}
            className="group relative flex flex-col items-center cursor-pointer select-none"
          >
            {/* The Rhombus Tile Container */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
              {/* Outer Ambient Glow Ring */}
              <div className="absolute inset-0 rotate-45 rounded-2xl bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-xl transition-all duration-500 -z-10" />

              {/* 45-Degree Rotated Diamond Frame */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rotate-45 rounded-2xl p-[1.5px] bg-gradient-to-br from-white/20 via-white/5 to-transparent group-hover:from-cyan-400 group-hover:via-indigo-500 group-hover:to-cyan-400 shadow-[0_6px_25px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 group-hover:scale-105">
                {/* Inner Masked Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative flex items-center justify-center">
                  {/* Counter-Rotated (-45deg) Background Image */}
                  <img
                    src={genre.image_background}
                    alt={genre.name}
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover group-hover:scale-[1.7] transition-transform duration-500 ease-out opacity-75 group-hover:opacity-100"
                  />
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 -rotate-45" />
                </div>
              </div>
            </div>

            {/* Name and Count Below */}
            <div className="text-center mt-5">
              <h3 className="text-sm sm:text-base font-bold font-mono tracking-wider text-zinc-900 dark:text-white uppercase group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {genre.name}
              </h3>
              <p className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase mt-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors">
                {genre.games_count ? `${genre.games_count.toLocaleString()} Titles` : "Browse Vault"}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GenresPage;
