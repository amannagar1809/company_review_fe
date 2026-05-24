import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  value,
  onChange
}) {
  return (
    <div className="relative">

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search company..."
        className="
          w-full
          border
          rounded-lg
          px-4
          py-3
          pr-12
        "
      />

      <FiSearch
        className="
        absolute
        right-4
        top-4
        text-purple-600
        "
      />

    </div>
  );
}