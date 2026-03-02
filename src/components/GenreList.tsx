import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  if (isLoading)
    return (
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    );
  return (
    <ul className="space-y-2">
      {data.map((genre) => (
        <li
          key={genre.id}
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 hover:text-white cursor-pointer transition"
        >
          <img
            src={genre.image_background}
            alt={genre.name}
            className="w-10 h-10 rounded-md object-cover"
          />

          <span className="text-sm font-medium">{genre.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
