import type { Platform } from "./Platform";


export interface Game {
  id: number;
  name: string;
  slug: String;
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: { platform: Platform; }[]; // coz in the backend design we have a array of objects of Platform in parent_platform
}
