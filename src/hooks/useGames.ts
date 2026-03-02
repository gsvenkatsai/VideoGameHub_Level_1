import useData from "./useData";
import type { Genre } from "./useGenres";

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
  parent_platforms:{ platform:Platform}[] // coz in the backend design we have a array of objects of Platform in parent_platform
}
const useGames =( 
  selectedGenre:Genre | null,selectedPlatform:Platform | null) => useData<Game>(
    '/games',{
      params:{
        genres:selectedGenre?.id, 
        platforms:selectedPlatform?.id
        }
      }, 
      [selectedGenre?.id,selectedPlatform?.id]
    );

export default useGames;