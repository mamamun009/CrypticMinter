import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import OverviewTab from './OverviewTab';
import DetailsTab from './DetailsTab';
import OwnersTab from './OwnersTab';
import OffersTab from './OffersTab';

const Tabs = ({ review }) => {
  return (
    <Tab.Group>
      <Tab.List className="p-1.5 border rounded-md flex gap-1 font-madeOuterSans w-full flex-wrap justify-center">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ${
                selected ? 'bg-gray-tab text-white' : 'bg-white text-gray-400'
              }`}
            >
              Overview
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ${
                selected ? 'bg-gray-tab text-white' : 'bg-white text-gray-400'
              }`}
            >
              Details
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ${
                selected ? 'bg-gray-tab text-white' : 'bg-white text-gray-400'
              }`}
            >
              Owners
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ${
                selected ? 'bg-gray-tab text-white' : 'bg-white text-gray-400'
              }`}
              disabled={review}
            >
              Offers
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className="">
        <Tab.Panel>
          <OverviewTab />
        </Tab.Panel>
        <Tab.Panel>
          <DetailsTab />
        </Tab.Panel>
        <Tab.Panel>
          <OwnersTab />
        </Tab.Panel>
        <Tab.Panel>
          <OffersTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
