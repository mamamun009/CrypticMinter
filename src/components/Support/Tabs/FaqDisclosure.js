import { Disclosure, Transition } from '@headlessui/react';
import { chevronDownIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const FaqDisclosure = ({ title, children, defaultOpen }) => {
  return (
    <Disclosure
      as="div"
      className=" overflow-y-auto overflow-x-hidden border-t mb-9 max-h-[228px]  scrollbar-thin"
      defaultOpen={defaultOpen}
    >
      {({ open }) => (
        <div className="mr-2.5 pt-8">
          <Disclosure.Button
            className={`flex items-center justify-between w-full `}
          >
            <span className="font-medium text-gray-900">{title}</span>

            <span className={`flex items-center justify-center  `}>
              <Icon
                icon={chevronDownIcon}
                className={`w-6 h-6 fill-gray-600 transition ${
                  // flip the chevron if the disclosure is open
                  open ? 'rotate-180' : ''
                }`}
              />
            </span>
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="relative w-full mt-10 text-gray-500 ">
              {children}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default FaqDisclosure;
