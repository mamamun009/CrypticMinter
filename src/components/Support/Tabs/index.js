import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import Icon from '../../Utils/Icon';
import {
  docsIcon,
  faqIcon,
  helpdeskIcon,
  resourcesIcon,
} from '../../../assets/icons';
import FaqTab from './FaqTab';

const Tabs = () => {
  return (
    <Tab.Group as="div" className="grid grid-cols-12 mt-20">
      <div className="col-span-4">
        <Tab.List className="flex flex-col items-start gap-10">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center gap-4 font-semibold text-sm ${
                  selected ? 'text-gray-900' : ' text-gray-500'
                }`}
              >
                <Icon icon={faqIcon} /> FAQs
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center gap-4 font-semibold text-sm ${
                  selected ? 'text-gray-900' : ' text-gray-500'
                }`}
              >
                <Icon icon={docsIcon} /> Docs
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center gap-4 font-semibold text-sm ${
                  selected ? 'text-gray-900' : ' text-gray-500'
                }`}
              >
                <Icon icon={resourcesIcon} /> Resources
              </button>
            )}
          </Tab>
          <Tab as={Fragment} disabled>
            {({ selected }) => (
              <button
                className={`flex items-center gap-4 font-semibold text-sm ${
                  selected ? 'text-gray-900' : ' text-gray-500'
                }`}
              >
                <Icon icon={helpdeskIcon} /> Helpdesk{' '}
                <span className="font-light leading-4 text-gray-600 text-xxs">
                  Coming Soon
                </span>
              </button>
            )}
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels className="col-span-8">
        <Tab.Panel>
          <FaqTab />
        </Tab.Panel>
        <Tab.Panel>
          <FaqTab />
        </Tab.Panel>
        <Tab.Panel>
          <FaqTab />
        </Tab.Panel>
        <Tab.Panel>
          <FaqTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
