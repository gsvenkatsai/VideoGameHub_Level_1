// import useData from "./useData";
import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { type FetchResponse } from "../services/api-client";
import genres from '../Data/genres';
export interface Genre{
    id: number;
  name: string;
  image_background :string;
}
// const useGenres = () => useData<Genre>('/genres');
const useGenres =() => useQuery({
  queryKey:['genres'],
  //we defined a serperate axios with base url and api key in apiClient.ts
  //we use useGenres in GenreList, it expects data but this api give data object inside count and results so we need to mention the type for get request
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
  staleTime:24*60*60*1000,//24hrs
  initialData:{count:genres.length, results:genres}//this data gets inserted into cache for 24hr no requests made to backend to fetch data
})
export default useGenres;