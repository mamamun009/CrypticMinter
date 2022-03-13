import Card from '../components/Base/Card';
import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import BasicDisclosure from '../components/Discover/BasicDisclosure';
import StatusFilter from '../components/Discover/StatusFilter';
import discoverCards from '../data/discoverCards';
import { useState } from 'react';
import PriceRangeFilter from '../components/Discover/PriceRangeFilter';
import { crossCircleIcon, loaderIcon } from '../assets/icons';
import Icon from '../components/Utils/Icon';

// data
import sortOptions from '../data/sortOptions';
import currencies from '../data/currencies';
import blockchains from '../data/blockchains';
import statuses from '../data/statuses';

const Discover = () => {
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
    <div className="relative w-full h-full">
      <Header />

      <div className="flex justify-center">
        <div className="relative grid w-full max-w-sm grid-cols-12 gap-8 px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <div className="col-span-3 ">
            <div className="sticky flex flex-col top-40">
              <h1 className="text-4xl leading-[44px] font-medium font-madeOuterSans">
                Discover
              </h1>

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

                <BasicDisclosure
                  className="mt-6"
                  title="Blockchain"
                  defaultOpen
                >
                  <div className="flex flex-col w-full gap-1 p-2 mt-2 bg-white border-2 rounded-lg">
                    {blockchains.map((blockchain) => (
                      <button
                        className={`rounded-lg p-2 flex justify-between items-center ${
                          blockchain.id === selectedBlockchain
                            ? 'bg-gray-100'
                            : ''
                        }`}
                        onClick={() => setSelectedBlockchain(blockchain.id)}
                        disabled={blockchain.comingSoon}
                      >
                        {blockchain.title}

                        {blockchain.comingSoon && (
                          <span className="leading-6 text-xxs">
                            Coming soon
                          </span>
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
          </div>

          <div className="w-full col-span-9 ">
            <div className="flex justify-end">
              <BasicDisclosure title="Sort By" className="w-full max-w-[256px]">
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
            </div>

            <div className="grid w-full grid-cols-3 gap-8 mt-10">
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

      <Footer />
    </div>
  );
};

export default Discover;
