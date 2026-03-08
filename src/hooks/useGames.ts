import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient, { type FetchResponse } from "../services/api-client";  
import type { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating_top:number;
  parent_platforms:{ platform:Platform}[] // coz in the backend design we have a array of objects of Platform in parent_platform
}
const useGames =(gameQuery:GameQuery) => 
  useQuery<FetchResponse<Game>,Error>({
    queryKey:['games',gameQuery],
    queryFn:()=>
      apiClient.getAll({ //to pass query string object we need to pass them as config objects
        params:{
        genres:gameQuery.genre?.id, 
        parent_platforms:gameQuery.platform?.id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText
        }
      })
  });

export default useGames;