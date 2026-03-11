import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type Publisher from "./Publisher";


export interface Game {
  id: number;
  name: string;
  slug: String;
  publishers:Publisher[];
  genres:Genre[];
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: { platform: Platform; }[]; // coz in the backend design we have a array of objects of Platform in parent_platform
}
