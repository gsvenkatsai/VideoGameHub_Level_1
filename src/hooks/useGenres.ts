// import useData from "./useData";
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import genres from '../Data/genres';
import type { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');
// const useGenres = () => useData<Genre>('/genres');
const useGenres =() => useQuery<{count: number; results: Genre[]}, Error>({
  queryKey:['genres'],
  //we defined a serperate axios with base url and api key in apiClient.ts
  //we use useGenres in GenreList, it expects data but this api give data object inside count and results so we need to mention the type for get request
  queryFn: apiClient.getAll,
  staleTime:24*60*60*1000,//24hrs
  initialData:{count:genres.length, results:genres}//this data gets inserted into cache for 24hr no requests made to backend to fetch data
})
export default useGenres;