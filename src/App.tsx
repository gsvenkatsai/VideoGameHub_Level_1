import "./index.css";

import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelecter from "./components/PlatformSelecter";
import type { Platform } from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-[1fr_6fr] grid-rows-[auto_1fr] h-screen">
      <nav className="min-[450px]:col-span-2 p-4 bg-blue-500 text-white dark:bg-gray-900 dark:text-white">
        <NavBar></NavBar>
      </nav>
      <aside className="bg-gray-200 dark:bg-black dark:text-white p-4 hidden min-[450px]:block">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </aside>
      <main className="bg-white p-4 dark:bg-gray-800 dark:text-white">
        <PlatformSelecter
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </main>
    </div>
  );
};

export default App;
