import Card from '../../Base/Card';
import discoverCards from '../../../data/discoverCards';
import BasicDisclosure from '../BasicDisclosure';
import StatusFilter from '../../Discover/StatusFilter';
import { useState } from 'react';
import PriceRangeFilter from '../../Discover/PriceRangeFilter';
import { crossCircleIcon, loaderIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

// data
import sortOptions from '../../../data/sortOptions';
import currencies from '../../../data/currencies';
import blockchains from '../../../data/blockchains';
import statuses from '../../../data/statuses';

const ArtworksTab = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
  const [priceRange, setPriceRange] = useState({
    min: '',
    max: '',
  });
  const [selectedBlockchain, setSelectedBlockchain] = useState(
    blockchains[0].id
  );
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].id);

  return (
    <div className="grid w-full grid-cols-12 gap-8">
      <div className="col-span-3 ">
        <BasicDisclosure title="Sort By" className="w-full ">
          <div className="absolute flex flex-col w-full gap-1 p-2 mt-2 bg-white border-2 rounded-lg">
            {sortOptions.map((option) => (
              <button
                className={`rounded-lg p-2  text-center ${
                  option.id === selectedSort ? 'bg-gray-100' : ''
                }`}
                onClick={() => setSelectedSort(option.id)}
              >
                {option.title}
              </button>
            ))}
          </div>
        </BasicDisclosure>

        <section className="pr-2 mt-12 ">
          <h5 className="text-xs font-bold leading-3 text-gray-900 uppercase">
            Filter by
          </h5>

          <div className="w-full h-px mt-6 bg-gray-200" />

          <BasicDisclosure className="mt-6" title="Status">
            <div className="w-full mt-6 bg-white border-2 rounded-lg">
              <StatusFilter
                statuses={statuses}
                selected={selectedStatus}
                setSelected={setSelectedStatus}
              />
            </div>
          </BasicDisclosure>

          <BasicDisclosure className="mt-6" title="Price Range">
            <div className="w-full mt-6 bg-white border-2 rounded-lg">
              <PriceRangeFilter
                currencies={currencies}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </BasicDisclosure>

          <BasicDisclosure className="mt-6" title="Blockchain" defaultOpen>
            <div className="absolute flex flex-col w-full gap-1 p-2 mt-2 bg-white border-2 rounded-lg">
              {blockchains.map((blockchain) => (
                <button
                  className={`rounded-lg p-2 flex justify-between items-center ${
                    blockchain.id === selectedBlockchain ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setSelectedBlockchain(blockchain.id)}
                  disabled={blockchain.comingSoon}
                >
                  {blockchain.title}

                  {blockchain.comingSoon && (
                    <span className="leading-6 text-xxs">Coming soon</span>
                  )}
                </button>
              ))}
            </div>
          </BasicDisclosure>

          <div className="w-full h-px mt-6 bg-gray-200" />

          <button
            className="flex items-center gap-2.5 font-bold text-sm leading-4 text-gray-900 fill-gray-900 hover:text-gray-700 hover:fill-gray-700 mt-6.5"
            onClick={() => {
              setSelectedStatus('');
              setSelectedCurrency(currencies[0].id);
              setPriceRange({
                min: '',
                max: '',
              });
              setSelectedBlockchain(blockchains[0].id);
            }}
          >
            <Icon icon={crossCircleIcon} className="w-5 h-5 " />
            Reset filter
          </button>
        </section>
      </div>

      <div className="w-full col-span-9 ">
        <div className="w-full">
          <div className="grid w-full grid-cols-3 gap-8 ">
            {discoverCards.map((item) => (
              <Card item={item} button />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-gray-900 border-2 rounded-full fill-gray-900">
              <Icon icon={loaderIcon} className="w-3 h-3 " />
              Loading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworksTab;
