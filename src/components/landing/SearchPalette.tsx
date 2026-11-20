import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useLandingSearch } from "../../hooks/useLandingGames";
import { LOCAL_GAMES } from "../../Data/localGames";
import useGameQueryStore from "../../store";
import PlatfromIconList from "../PlatfromIconList";
import CriticScore from "../CriticScore";
import GameCoverImage from "../common/GameCoverImage";
import getCroppedImageURL from "../../services/image-url";

const SearchPalette = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  // Live RAWG search
  const { data: rawgData } = useLandingSearch(query);

  // Instantly search local games in 0ms
  const localMatches = useMemo(() => {
    if (!query || query.trim().length < 2) return [];
    const q = query.trim().toLowerCase();
    return LOCAL_GAMES.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.genres.some((genre) => genre.name.toLowerCase().includes(q)) ||
        g.publishers?.some((pub) => pub.name.toLowerCase().includes(q))
    );
  }, [query]);

  // Combine local matches with any live RAWG results (deduped by id)
  const combinedGames = useMemo(() => {
    const rawgList = rawgData?.results || [];
    const map = new Map<number, (typeof LOCAL_GAMES)[0] | (typeof rawgList)[0]>();

    // Add local matches first (guaranteed complete with description & artwork)
    localMatches.forEach((g) => map.set(g.id, g));

    // Add rawg results if not already present
    rawgList.forEach((g) => {
      if (!map.has(g.id)) {
        map.set(g.id, g);
      }
    });

    return Array.from(map.values()).slice(0, 7);
  }, [localMatches, rawgData]);

  // Global key listener for '/' and 'Cmd+K' / 'Ctrl+K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectGame = (gameId: number) => {
    setIsOpen(false);
    navigate(`/game/${gameId}`);
  };

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (combinedGames.length > 0 && selectedIndex >= 0 && selectedIndex < combinedGames.length) {
      handleSelectGame(combinedGames[selectedIndex].id);
    } else if (query.trim()) {
      setSearchText(query.trim());
      navigate("/games");
    }
  };

  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (!isOpen || combinedGames.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % combinedGames.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + combinedGames.length) % combinedGames.length);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto z-40">
      <form onSubmit={handleSubmitSearch} className="relative">
        <div className="relative flex items-center group">
          <FiSearch className="absolute left-4.5 text-zinc-400 group-focus-within:text-cyan-400 text-base transition-colors" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
              setSelectedIndex(0);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDownInInput}
            placeholder="Search 500,000+ games... (try 'Witcher', 'GTA', 'Spider-Man')"
            className="w-full pl-12 pr-28 py-3.5 rounded-xl bg-[#0B0F1A]/90 hover:bg-[#111726]/90 focus:bg-[#111726] border border-white/10 hover:border-white/20 focus:border-cyan-400/80 text-sm text-white placeholder-zinc-500 font-sans tracking-wide backdrop-blur-xl transition-all duration-200 outline-none shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] focus:ring-2 focus:ring-cyan-400/30"
          />

          {/* Shortcut Badges */}
          <div className="absolute right-3.5 flex items-center gap-1.5 pointer-events-none">
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold text-zinc-400 bg-white/5 border border-white/10 rounded">
              ⌘K
            </kbd>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold text-zinc-400 bg-white/5 border border-white/10 rounded">
              /
            </kbd>
          </div>
        </div>
      </form>

      {/* Live Dropdown Results */}
      <AnimatePresence>
        {isOpen && query.trim().length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-[#0B0F1A]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(34,211,238,0.1)] overflow-hidden z-50 max-h-[380px] overflow-y-auto"
          >
            {combinedGames.length > 0 ? (
              <div className="space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase text-zinc-500 border-b border-white/5 flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    INSTANT ARCHIVE MATCHES
                  </span>
                  <span className="text-cyan-400 font-bold">{combinedGames.length} RESULTS</span>
                </div>
                {combinedGames.map((game, idx) => (
                  <button
                    key={game.id}
                    onClick={() => handleSelectGame(game.id)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      selectedIndex === idx
                        ? "bg-white/10 border border-cyan-400/30 text-white"
                        : "hover:bg-white/5 text-zinc-300 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                        <GameCoverImage
                          src={getCroppedImageURL(game.background_image)}
                          alt={game.name}
                          fallbackTitle={game.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate text-white">
                          {game.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {game.parent_platforms && (
                            <PlatfromIconList
                              platforms={game.parent_platforms.map((p) => p.platform)}
                            />
                          )}
                          <span className="text-[10px] font-mono text-zinc-500">
                            {game.released?.slice(0, 4) || "TBA"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      {game.metacritic && <CriticScore score={game.metacritic} />}
                      <FiArrowRight className="text-zinc-500 text-xs" />
                    </div>
                  </button>
                ))}

                <button
                  onClick={() => {
                    setSearchText(query.trim());
                    setIsOpen(false);
                    navigate("/games");
                  }}
                  className="w-full mt-2 py-2 text-center text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline uppercase tracking-wider block"
                >
                  View all results for "{query}" in catalog →
                </button>
              </div>
            ) : (
              <div className="p-6 text-center text-xs font-mono text-zinc-400">
                NO TITLES FOUND IN LOCAL ARCHIVE FOR "{query}".
                <button
                  onClick={() => {
                    setSearchText(query.trim());
                    setIsOpen(false);
                    navigate("/games");
                  }}
                  className="mt-2 block mx-auto text-cyan-400 underline"
                >
                  Search entire RAWG database →
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchPalette;
