const Filters = ({ filters, selectedFilters, setSelectedFilters }) => {
  return (
    <div className="border w-full max-w-[352px] p-12 rounded-xl">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-medium text-gray-900">Filters</h4>
        <button
          className="font-medium leading-4 text-blue-light"
          onClick={() => setSelectedFilters([])}
        >
          Clear all
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {filters.map((filter) => (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name={filter.name}
              id={filter.id}
              className="w-6 h-6 rounded cursor-pointer text-blue-light ring-0 checked:ring-0 focus:ring-0"
              checked={selectedFilters.includes(filter.id)}
              onChange={() => {
                if (selectedFilters.includes(filter.id)) {
                  setSelectedFilters(
                    selectedFilters.filter((id) => id !== filter.id)
                  );
                } else {
                  setSelectedFilters([...selectedFilters, filter.id]);
                }
              }}
            />
            <label
              htmlFor={filter.id}
              className="text-sm font-medium leading-6 text-gray-900"
            >
              {filter.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
