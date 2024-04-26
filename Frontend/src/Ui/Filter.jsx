import { useSearchParams } from 'react-router-dom';

function Filter({ options, filterFiled }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('status') || '';

  function handleClick(value) {
    searchParams.set('status', value);
    setSearchParams(searchParams);
  }

  return (
    <div className="inline space-x-3">
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            onClick={() => handleClick(option.value)}
            className={`border rounded-lg py-1 px-3 ${isActive ? 'bg-primary-900 text-secondary-0' : ' '}`}
            key={option.value}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
