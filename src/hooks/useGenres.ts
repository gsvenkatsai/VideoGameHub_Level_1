import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
interface Genre{
    id: number;
  name: string;
}
const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]); //<> used to specify the type to satisy type script
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
        .get<FetchGenresResponse>("/genres",{signal:controller.signal})
        .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
        return ()=> controller.abort();
    },[]);  
    return { genres, error, isLoading};
};
export default useGenres;