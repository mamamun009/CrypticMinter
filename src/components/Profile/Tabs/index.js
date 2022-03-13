import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import OwnedTab from './OwnedTab';
import CreatedTab from './CreatedTab';
import LikedTab from './LikedTab';

function Tabs({ owned, created, liked }) {
  return (
    <Tab.Group>
      <Tab.List className="flex items-center gap-2 mb-6">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`
                py-1.5 px-3 rounded-md font-madeOuterSans font-bold text-sm leading-4 transition
              ${
                selected
                  ? 'bg-gray-tab text-white'
                  : 'bg-white text-gray-600/80'
              }`}
            >
              Owned ({owned.length})
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
                  : 'bg-white text-gray-600/80'
              }`}
            >
              Created ({created.length})
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
                  : 'bg-white text-gray-600/80'
              }`}
            >
              Liked ({liked.length})
            </button>
          )}
        </Tab>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <OwnedTab cards={owned} />
        </Tab.Panel>
        <Tab.Panel>
          <CreatedTab cards={created} />
        </Tab.Panel>
        <Tab.Panel>
          <LikedTab cards={liked} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
