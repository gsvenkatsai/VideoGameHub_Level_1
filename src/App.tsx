import "./index.css";

import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelecter from "./components/PlatformSelecter";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-[1fr_6fr] grid-rows-[auto_1fr] h-screen">
      <nav className="min-[450px]:col-span-2 p-4 bg-blue-500 text-white dark:bg-gray-900 dark:text-white">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </nav>
      <aside className="bg-gray-200 dark:bg-black dark:text-white p-4 hidden min-[450px]:block">
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </aside>
      <main className="bg-white p-4 dark:bg-gray-800 dark:text-white">
        <GameHeading gameQuery={gameQuery} />
        <div className="space-y-6">
          <div className="flex gap-10">
            <PlatformSelecter
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </main>
    </div>
  );
};

export default App;
