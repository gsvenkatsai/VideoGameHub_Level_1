import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return <h1 className="text-6xl font-bold mb-4">{heading}</h1>;
};

export default GameHeading;
