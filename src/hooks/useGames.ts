import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames=()=>{
    const [games, setGames] = useState<Game[]>([]); //<> used to specify the type to satisy type script
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
        .get<FetchGameResponse>("/games",{signal:controller.signal})
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
        return ()=> controller.abort();
    },[]);  
    return { games, error, isLoading};
}

export default useGames;