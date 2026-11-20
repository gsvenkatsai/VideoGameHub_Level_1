import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { GENRE_TILES_DATA } from "../../Data/landingData";
import useGameQueryStore from "../../store";
import GameCoverImage from "../common/GameCoverImage";

const GenreTiles = () => {
  const navigate = useNavigate();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const handleGenreClick = (genreId: number) => {
    setGenreId(genreId);
    navigate("/games");
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-cyan-400 font-bold flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            SECTION 04 // GENRE ARCHIVES
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Explore by Atmosphere & Genre
          </h2>
        </div>

        <button
          onClick={() => navigate("/genres")}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
        >
          <span>VIEW ALL 19 GENRES IN 3D RHOMBUS</span>
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 8 Tall Tiles: Horizontal snap scroll on mobile, 4-col on tablet, 8-col on desktop */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none">
        {GENRE_TILES_DATA.map((genre) => (
          <div
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className="group relative flex-shrink-0 w-52 sm:w-auto h-80 rounded-2xl bg-[#0B0F1A] border border-white/10 hover:border-cyan-400/60 overflow-hidden cursor-pointer snap-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(34,211,238,0.25)] flex flex-col justify-end p-4"
          >
            {/* Background Cover Image with Duotone Filter */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <GameCoverImage
                src={genre.image}
                alt={genre.name}
                fallbackTitle={genre.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Duotone Layer: Cyan-to-Violet gradient with mix-blend-color on base, clears to full color on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#22D3EE]/80 to-[#C77DFF]/70 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />

              {/* Dark Vignette Overlay for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/60 to-transparent group-hover:from-[#05070D]/90 transition-all duration-300" />
            </div>

            {/* Content info */}
            <div className="relative z-10 space-y-1">
              <div className="font-mono text-[10px] tracking-widest uppercase text-cyan-300">
                {genre.count} TITLES
              </div>

              <h3 className="text-lg font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {genre.name}
              </h3>

              <p className="text-[11px] text-zinc-400 line-clamp-1 group-hover:text-zinc-200 transition-colors">
                {genre.tagline}
              </p>

              {/* Sliding Arrow on Hover */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-wider uppercase font-bold">
                  EXPLORE
                </span>
                <BsArrowRight className="text-sm -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 text-cyan-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreTiles;
