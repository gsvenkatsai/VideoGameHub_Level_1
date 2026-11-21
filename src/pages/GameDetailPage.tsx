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
    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 bg-transparent dark:text-white p-6 gap-8 min-h-screen">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex items-start gap-3 flex-wrap">
            <Heading size="2xl" color="inherit" lineHeight="tight">{game.name}</Heading>
            <CriticScore score={game.metacritic} />
          </div>
          <p className="text-sm text-zinc-500 dark:text-[#5f6368] font-medium mt-2 tracking-tight">
            {game.genres.map((g) => g.name).join(", ")}
            {game.publishers.length > 0 && " · "}
            {game.publishers.map((p) => p.name).join(", ")}
          </p>
        </div>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-3">
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
