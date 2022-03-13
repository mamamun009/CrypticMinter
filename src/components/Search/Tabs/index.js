import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import ArtworksTab from './ArtworksTab';
import CollectionsTab from './CollectionsTab';
import CreatorsTab from './CreatorsTab';

function Tabs() {
  return (
    <Tab.Group>
      <div className="flex items-center justify-between w-full mb-12">
        <h1 className="text-4xl leading-[44px] font-madeOuterSans">Search</h1>

        <Tab.List className="flex items-center justify-end gap-2 ">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`
                py-1.5 px-3 rounded-md font-madeOuterSans font-bold text-sm leading-4 transition
              ${
                selected
                  ? 'bg-gray-tab text-white'
                  : 'bg-white text-gray-500/90'
              }`}
              >
                Artworks
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`
                py-1.5 px-3 rounded-md font-madeOuterSans font-bold text-sm leading-4 transition
              ${
                selected
                  ? 'bg-gray-tab text-white'
                  : 'bg-white text-gray-500/90'
              }`}
              >
                Collections
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`
                py-1.5 px-3 rounded-md font-madeOuterSans font-bold text-sm leading-4
              ${
                selected
                  ? 'bg-gray-tab text-white'
                  : 'bg-white text-gray-500/90'
              }`}
              >
                Creators
              </button>
            )}
          </Tab>
        </Tab.List>
      </div>

      <Tab.Panels>
        <Tab.Panel>
          <ArtworksTab />
        </Tab.Panel>
        <Tab.Panel>
          <CollectionsTab />
        </Tab.Panel>
        <Tab.Panel>
          <CreatorsTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
