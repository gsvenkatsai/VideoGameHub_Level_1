import useGenres, { type Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading)
    return (
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    );
  return (
    <ul className="space-y-2">
      {data?.results.map((genre) => (
        <li
          key={genre.id}
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 hover:text-white cursor-pointer transition"
        >
          <img
            src={genre.image_background}
            alt={genre.name}
            className="w-10 h-10 rounded-md object-cover"
          />

          <button
            className={`${
              genre.id === selectedGenre?.id ? "font-bold" : "font-normal"
            } px-3 py-2 text-left w-full`}
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
