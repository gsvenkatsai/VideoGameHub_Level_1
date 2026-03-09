import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${gameQuery.platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1 className="text-6xl font-bold mb-4">{heading}</h1>;
};

export default GameHeading;
