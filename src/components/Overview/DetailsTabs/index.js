import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import EventsTab from './EventsTab';

const Tabs = ({ review }) => {
  return (
    <section className="flex justify-center flex-1 mt-24">
      <Tab.Group
        as="div"
        className="flex flex-col w-full max-w-sm px-4 py-6 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
      >
        <Tab.List className="p-1.5 border rounded-md flex gap-1 font-madeOuterSans w-full flex-wrap ">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ${
                  selected ? 'bg-gray-tab text-white' : 'bg-white text-gray-400'
                }`}
              >
                Events
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
                Pricing History
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <EventsTab />
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Tabs;
