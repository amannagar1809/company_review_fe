export default function CityFilter({
  value,
  onChange,
  cities
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

      <option value="">
        All Cities
      </option>

      {cities.map((city) => (

        <option
          key={city}
          value={city}
        >
          {city}
        </option>

      ))}

    </select>
  );
}