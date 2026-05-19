import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Game } from "../entities//Game";

const apiClient = new APIClient<Game>('/games'); 
const useGame = (id: string) => useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id)
})
export default useGame;