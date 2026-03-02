import type { GameQuery } from "../App";
import useData from "./useData";  

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
const useGames =(gameQuery:GameQuery) => useData<Game>(
    '/games',{
      params:{
        genres:gameQuery.genre?.id, 
        platforms:gameQuery.platform?.id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText
        }
      }, 
      [gameQuery]
    );

export default useGames;