import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoGameController } from "react-icons/io5";

import LandingNav from "../components/landing/LandingNav";
import Hero from "../components/landing/Hero";
import Spotlight from "../components/landing/Spotlight";
import BentoGrid from "../components/landing/BentoGrid";
import GenreTiles from "../components/landing/GenreTiles";
import HowItWorks from "../components/landing/HowItWorks";
import ClosingCTA from "../components/landing/ClosingCTA";
import LandingFooter from "../components/landing/LandingFooter";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [exitTarget, setExitTarget] = useState("/games");

  const handleLaunch = (target: string) => {
    setExitTarget(target);
    setIsExiting(true);
    setTimeout(() => {
      navigate(target);
    }, 550);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#EFF2F6] dark:bg-[#05070D] text-zinc-950 dark:text-white overflow-x-hidden flex flex-col selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      
      {/* Global Atmospheric Lighting Flares (Contextual, max 2 active at once) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-cyan-500/10 dark:from-[#22D3EE]/15 via-indigo-500/5 dark:via-[#818CF8]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-t from-violet-500/5 dark:from-[#C77DFF]/10 via-transparent to-transparent blur-[160px] rounded-full" />

        {/* Subtle Cyber Dotted Grid (Dark in light mode, white in dark mode) */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: `36px 36px`,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!isExiting ? (
          <motion.div
            key="landing-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col flex-1"
          >
            {/* Top Navigation with Theme Switcher */}
            <LandingNav onSkipToGames={() => handleLaunch("/games")} />

            {/* Section 1: Hero (Cover Wall + Headline + Real HUD + Command Palette + Platform Chips + CTAs) */}
            <Hero
              onExploreGames={() => handleLaunch("/games")}
              onBrowseGenres={() => handleLaunch("/genres")}
            />

            {/* Section 2: Featured Spotlight (Curator's choice wide card with Ken Burns + dominant color extraction + animated Metacritic ring) */}
            <Spotlight />

            {/* Section 3: Bento Grid (Vast Library, Every Platform, Metacritic Verified, Trending Now with signature amber badge, Filter in One Click) */}
            <BentoGrid />

            {/* Section 4: Genre Tiles (8 tall duotone tiles with cyan-violet mix-blend clearing on hover to full color + mobile snap scroll) */}
            <GenreTiles />

            {/* Section 5: How It Works (3 steps connected by animated SVG scroll line) */}
            <HowItWorks />

            {/* Section 6: Closing CTA ("READY TO CLUTCH?" + Glowing Mascot + Large Magnetic Primary Button) */}
            <ClosingCTA onExploreGames={() => handleLaunch("/games")} />

            {/* Footer (POWERED BY RAWG API, real status telemetry, social links) */}
            <LandingFooter />
          </motion.div>
        ) : (
          <motion.div
            key="portal-warp"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EFF2F6] dark:bg-[#05070D]"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-cyan-500 dark:border-cyan-400 border-t-transparent animate-spin" />
              <IoGameController className="absolute inset-0 m-auto text-xl text-cyan-600 dark:text-cyan-400" />
            </div>
            <p className="mt-6 font-mono text-xs tracking-widest uppercase text-cyan-700 dark:text-cyan-400 font-bold animate-pulse">
              {exitTarget === "/genres" ? "LOADING TAXONOMY ARCHIVE..." : "INITIALIZING RAWG GAME CATALOG..."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
