// Import ONLY the type (removed at compile time, no JS output)
import { Link } from "react-router-dom";
import type { Game } from "../entities/Game";
// import getCroppedImageURL from "../services/image-url";
// Generic reusable Card wrapper component
import Card from "./Card";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatfromIconList from "./PlatfromIconList";
// Props contract for this component
// We expect a full Game object
interface Props {
  game: Game;
}
// GameCard is a presentational component
// It receives data and renders UI — no business logic here
const GameCard = ({ game }: Props) => {
  return (
    // Card is a wrapper component that provides layout + styling
    <Card>
      <Link to={"/game/" + game.id} className="block">
        {/* Image with subtle bottom vignette */}
        <div className="relative w-full h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          {game.background_image ? (
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs font-mono text-zinc-400 dark:text-zinc-600">
              NO IMAGE
            </div>
          )}
          {/* Subtle gradient vignette to blend image into the card */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#111215] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content section */}
        <div className="p-3.5">
          <div className="flex items-center justify-between w-full mb-1.5">
            <PlatfromIconList
              platforms={game.parent_platforms?.map((p) => p.platform) || []}
            />
            <CriticScore score={game.metacritic} />
          </div>
          <h2 className="text-sm font-semibold leading-snug text-zinc-900 dark:text-white tracking-tight">
            {game.name}
            <Emoji rating={game.rating_top} />
          </h2>
        </div>
      </Link>
    </Card>
  );
};

export default GameCard;
