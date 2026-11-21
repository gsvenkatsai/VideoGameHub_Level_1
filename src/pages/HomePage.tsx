import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelecter from "../components/PlatformSelecter";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-[240px_1fr]">
      <aside className="bg-white dark:bg-[#090a0d]/70 dark:backdrop-blur-md border-r border-zinc-200/90 dark:border-white/[0.08] shadow-sm dark:shadow-[4px_0_24px_rgba(0,0,0,0.5)] p-5 hidden min-[450px]:block min-h-screen">
        <GenreList />
      </aside>
      <main className="bg-transparent text-zinc-900 dark:text-white p-6">
        <GameHeading />
        <div className="space-y-5 mt-2">
          <div className="flex gap-3">
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
