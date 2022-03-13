import BasicDisclosure from './BasicDisclosure';

const PriceRangeFilter = ({
  currencies,
  selectedCurrency,
  setSelectedCurrency,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className="px-3.5 pt-5">
      <BasicDisclosure
        title={
          currencies.find((currency) => currency.id === selectedCurrency).title
        }
        light
      >
        <div className="absolute flex flex-col w-full gap-1 p-2 mt-2 bg-white border-2 rounded-lg">
          {currencies.map((currency) => (
            <button
              className={`rounded-lg p-2  ${
                currency.id === selectedCurrency ? 'bg-gray-100' : ''
              }`}
              onClick={() => setSelectedCurrency(currency.id)}
            >
              {currency.title}
            </button>
          ))}
        </div>
      </BasicDisclosure>

      <div className="flex items-center w-full gap-1 mt-5">
        <input
          type="number"
          className=" max-w-[100px] border border-gray-300 px-2.5 py-2 rounded-lg text-sm "
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({
              ...priceRange,
              min: e.target.value,
            })
          }
        />
        <span className="flex-1 text-sm text-center">to</span>
        <input
          type="number"
          className="max-w-[100px] border border-gray-300 px-2.5 py-2 rounded-lg text-sm "
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({
              ...priceRange,
              max: e.target.value,
            })
          }
        />
      </div>

      <button className="py-2.5 w-full  px-5 rounded my-4 bg-blue-light font-madeOuterSans font-bold text-sm leading-4 text-gray-100">
        Apply
      </button>
    </div>
  );
};

export default PriceRangeFilter;
