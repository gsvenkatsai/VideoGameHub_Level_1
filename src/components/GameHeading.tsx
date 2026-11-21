import { motion, AnimatePresence } from "framer-motion";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import { IoGameControllerOutline, IoSparklesOutline } from "react-icons/io5";

const DEFAULT_BANNER =
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const bannerImg = genre?.image_background || DEFAULT_BANNER;
  const title = genre?.name || "ALL TITLES";

  return (
    <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-zinc-200/90 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.85)] group">
      {/* Background Image with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bannerImg}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bannerImg}')` }}
        />
      </AnimatePresence>

      {/* Multi-layer Gradient Overlays for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090a0d]/90 via-[#090a0d]/40 to-transparent" />

      {/* Top Telemetry / PlayStation Category Tag */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          PLAYSTATION SHOWCASE
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-400 uppercase bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5">
          <IoGameControllerOutline className="text-cyan-400" />
          {platform?.name ? `PLATFORM: ${platform.name.toUpperCase()}` : "ALL PLATFORMS"}
        </div>
      </div>

      {/* Center / Lower-Third Title Content */}
      <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={title + (platform?.name || "")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Subhead */}
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-1 flex items-center gap-1.5">
              <IoSparklesOutline className="text-sm" />
              {genre ? `GENRE ARCHIVE // ${genre.name.toUpperCase()}` : "GLOBAL DIRECTORY"}
            </p>

            {/* Massive Bold Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase drop-shadow-lg font-sans">
              {title}
            </h1>

            {/* Meta stats row */}
            <p className="text-xs font-mono text-zinc-400 mt-1.5 flex items-center gap-3">
              <span>
                {genre?.games_count
                  ? `${genre.games_count.toLocaleString()} TITLES AVAILABLE`
                  : "500,000+ TITLES INDEXED"}
              </span>
              {platform && (
                <>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="text-zinc-300">FILTERED: {platform.name}</span>
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GameHeading;
