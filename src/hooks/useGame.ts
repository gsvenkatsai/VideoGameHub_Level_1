import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Game } from "../entities/Game";
import { LOCAL_GAMES } from "../Data/localGames";

const apiClient = new APIClient<Game>('/games');

const useGame = (id: string) => {
  const localFallback = LOCAL_GAMES.find((g) => g.id === Number(id));

  return useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id),
    initialData: localFallback,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGame;
