import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import PriceTab from './PriceTab';
import AuctionTab from './AuctionTab';

const Tabs = () => {
  return (
    <div className="w-full max-w-[400px] mx-auto md:ml-0">
      <Tab.Group>
        <Tab.List className="flex w-full gap-1 p-2 border border-gray-200 rounded-lg bg-gray-50">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`
              p-3.5 rounded-md font-semibold text-lg  flex-1 transition
                ${
                  selected
                    ? 'bg-blue-dark/80 text-white'
                    : 'bg-transparent text-black'
                }
                `}
              >
                Fixed Price
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`
              p-3.5 rounded-md font-semibold text-lg  flex-1 transition
                ${
                  selected
                    ? 'bg-blue-dark/80 text-white'
                    : 'bg-transparent text-black'
                }
                `}
              >
                Auction
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <PriceTab />
          </Tab.Panel>
          <Tab.Panel>
            <AuctionTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
