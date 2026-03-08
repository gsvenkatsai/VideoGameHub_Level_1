import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { type FetchResponse } from "../services/api-client";  

//interfaces are created to create a object with particular attribute
export interface Platform{
  id:number;
  name:string;
  slug:string;
}
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
      apiClient.get<FetchResponse<Game>>('games',{
        params:{
        genres:gameQuery.genre?.id, 
        parent_platforms:gameQuery.platform?.id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText
        }
      })
      .then(res=>res.data)
  });

export default useGames;