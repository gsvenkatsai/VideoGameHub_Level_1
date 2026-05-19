import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 bg-zinc-100 dark:bg-[#0f0f17] dark:text-zinc-100 p-4 gap-4">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Heading size="2xl">{game.name}</Heading>
            <CriticScore score={game.metacritic} />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">
            {game.genres.map((g) => g.name).join(", ")}
            {game.publishers.length > 0 && " • "}
            {game.publishers.map((p) => p.name).join(", ")}
          </p>
        </div>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-2">
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
