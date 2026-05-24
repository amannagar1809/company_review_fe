export default function SortDropdown({
  value,
  onChange
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="
      border
      rounded-lg
      px-4
      py-3
      "
    >

      <option value="name">
        Name
      </option>

      <option value="rating">
        Rating
      </option>

      <option value="newest">
        Newest
      </option>

    </select>
  );
}