import type { GameQuery } from "../App";
import useGames, { type Platform } from "../hooks/useGames";
import type { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
