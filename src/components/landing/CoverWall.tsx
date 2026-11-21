import { useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { LOCAL_GAMES } from "../../Data/localGames";
import GameCoverImage from "../common/GameCoverImage";
import getCroppedImageURL from "../../services/image-url";
import { useTheme } from "../../context/ThemeContext";

interface CoverWallProps {
  selectedPlatformId: number;
}

const CoverWall = ({ selectedPlatformId }: CoverWallProps) => {
  const { isDark } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle parallax translation tied to scroll
  const parallaxY = useTransform(scrollY, [0, 800], [0, 120]);

  // Distribute all 21 local games across 6 columns
  const columns = useMemo(() => {
    const cols: typeof LOCAL_GAMES[] = [[], [], [], [], [], []];
    LOCAL_GAMES.forEach((game, idx) => {
      cols[idx % 6].push(game);
    });
    // Duplicate each column array so the vertical marquee loops seamlessly
    return cols.map((col) => [...col, ...col, ...col]);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Rotated Container: Visible and animating in both Light and Dark mode */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : parallaxY }}
        className="w-[140%] h-[150%] -left-[20%] -top-[25%] absolute flex justify-center gap-4 sm:gap-6 rotate-[-8deg] scale-110 sm:scale-125 opacity-90 transition-opacity duration-300"
      >
        {columns.map((column, colIdx) => {
          const isReverse = colIdx % 2 === 1;
          const duration = 26 + (colIdx % 3) * 6; // Differing speeds for natural organic motion

          return (
            <motion.div
              key={colIdx}
              initial={{ y: isReverse ? -200 : 0 }}
              animate={
                prefersReducedMotion
                  ? { y: 0 }
                  : {
                      y: isReverse ? [0, -600] : [-600, 0],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
              className={`flex flex-col gap-4 sm:gap-6 flex-shrink-0 w-36 sm:w-48 md:w-56 ${
                colIdx >= 3 ? "hidden md:flex" : ""
              } ${colIdx >= 5 ? "hidden lg:flex" : ""}`}
            >
              {column.map((game, itemIdx) => {
                const isMatchingPlatform =
                  selectedPlatformId === 0 ||
                  game.parent_platforms?.some((p) => p.platform.id === selectedPlatformId);

                return (
                  <div
                    key={`${game.id}-${colIdx}-${itemIdx}`}
                    className={`relative rounded-xl overflow-hidden aspect-[3/4] bg-white dark:bg-[#0B0F1A] border border-slate-300 dark:border-white/10 shadow-lg dark:shadow-2xl transition-all duration-500 ${
                      isMatchingPlatform
                        ? "opacity-95 scale-100 ring-1 ring-cyan-500/40 dark:ring-cyan-400/30"
                        : "opacity-25 grayscale scale-95"
                    }`}
                  >
                    <GameCoverImage
                      src={getCroppedImageURL(game.background_image)}
                      alt={game.name}
                      fallbackTitle={game.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                    <span className="absolute bottom-2 left-2 right-2 text-[10px] font-mono tracking-wider text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] truncate uppercase font-bold">
                      {game.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Radial Vignette & Theme-Adaptive Veil: Leaves animation visible while framing edges */}
      <div
        className="absolute inset-0 z-10 transition-colors duration-500 pointer-events-none"
        style={{
          background: isDark
            ? `radial-gradient(ellipse 70% 60% at 50% 45%, rgba(5,7,13,0.3) 0%, rgba(5,7,13,0.85) 65%, #05070D 100%)`
            : `radial-gradient(ellipse 70% 60% at 50% 45%, rgba(239,242,246,0.35) 0%, rgba(239,242,246,0.85) 65%, #EFF2F6 100%)`,
        }}
      />
    </div>
  );
};

export default CoverWall;
