import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import "./index.css";
const App = () => {
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-[1fr_6fr] grid-rows-[auto_1fr] h-screen">
      <nav className="min-[450px]:col-span-2 p-4 bg-blue-500 text-white dark:bg-gray-900 dark:text-white">
        <NavBar></NavBar>
      </nav>
      <aside className="bg-gray-200 dark:bg-black dark:text-white p-4 hidden min-[450px]:block">
        <GenreList />
      </aside>
      <main className="bg-white p-4 dark:bg-gray-800 dark:text-white">
        <GameGrid />
      </main>
    </div>
  );
};

export default App;
