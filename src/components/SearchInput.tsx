import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <div className="relative inline-block">
        <FaSearch
          size={14}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
        <input
          ref={ref}
          type="text"
          placeholder="Search games..."
          className="pl-8 px-3 py-2 border rounded-lg text-black dark:text-white"
        />
      </div>
    </form>
  );
};

export default SearchInput;
