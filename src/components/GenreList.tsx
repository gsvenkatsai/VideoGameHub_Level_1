import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (isLoading)
    return (
      <div className="flex flex-col gap-3 mt-2">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-md bg-zinc-200 dark:bg-[#161718] animate-pulse shrink-0" />
            <div className="h-3 bg-zinc-200 dark:bg-[#161718] rounded w-24 animate-pulse" />
          </div>
        ))}
      </div>
    );
  return (
    <>
      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-[#5f6368] mb-3 px-2">
        Genres
      </p>
      <ul className="space-y-0.5">
        {data?.results.map((genre) => {
          const isSelected = genre.id === selectedGenreId;
          return (
            <li key={genre.id}>
              <button
                onClick={() => setSelectedGenreId(genre.id)}
                className={`flex items-center gap-2.5 w-full px-2.5 py-1.5 rounded-lg transition-all duration-150 text-left relative cursor-pointer
                  ${
                    isSelected
                      ? "bg-cyan-500/15 border border-cyan-400/50 text-cyan-950 font-bold shadow-sm dark:bg-white/10 dark:border-transparent dark:text-white"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.05]"
                  }`}
              >
                <img
                  src={genre.image_background}
                  alt={genre.name}
                  className="w-7 h-7 rounded-md object-cover shrink-0 opacity-80"
                />
                <span className="text-sm tracking-tight truncate">
                  {genre.name}
                </span>
                {isSelected && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GenreList;
