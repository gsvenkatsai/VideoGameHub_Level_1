// Import ONLY the type (removed at compile time, no JS output)
import type { Game } from "../hooks/useGames";
// Generic reusable Card wrapper component
import Card from "./Card";
import CriticScore from "./CriticScore";
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
      {/* 
        Render image only if it exists.
        Some API responses may return null background_image.
        Defensive rendering prevents runtime errors.
      */}
      {game.background_image && (
        <img
          src={game.background_image} // Image URL from API
          alt={game.name} // Accessibility improvement
          className="w-full h-48 object-cover"
          /*
            w-full → full width of card
            h-48 → fixed height for consistent layout
            object-cover → prevents distortion, crops properly
          */
        />
      )}

      {/* Content section */}
      <div className="p-4">
        {/* Game title */}
        <h2 className="text-lg font-semibold">{game.name}</h2>
        <div className="flex items-center justify-between w-full p-4 col-span-2">
          <PlatfromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
