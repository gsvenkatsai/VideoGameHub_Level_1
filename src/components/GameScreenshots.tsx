import useScreenshots from "../hooks/useScreenshots";
import { Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-2 grid-rows-[auto] h-screen">
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </div>
  );
};

export default GameScreenshots;
