import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelecter from "../components/PlatformSelecter";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-[1fr_6fr] grid-rows-[auto] h-screen">
      <aside className="bg-gray-200 dark:bg-black dark:text-white p-4 hidden min-[450px]:block">
        <GenreList />
      </aside>
      <main className="bg-white p-4 dark:bg-gray-800 dark:text-white">
        <GameHeading />
        <div className="space-y-6">
          <div className="flex gap-10">
            <PlatformSelecter />
            <SortSelector />
          </div>
          <GameGrid />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
