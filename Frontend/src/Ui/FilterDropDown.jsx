import { useSearchParams } from 'react-router-dom';

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || '';

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      className="p-1 w-20 rounded-lg"
    >
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
  );
}

export default FilterDropDown;
