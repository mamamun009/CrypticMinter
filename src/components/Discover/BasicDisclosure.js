import { Disclosure, Transition } from '@headlessui/react';
import { chevronDownIcon } from '../../assets/icons';
import Icon from '../Utils/Icon';

const BasicDisclosure = ({
  title,
  children,
  light,
  className,
  defaultOpen,
}) => {
  return (
    <Disclosure as="div" className={className} defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex items-center justify-between w-full p-2  rounded-lg
            ${light ? 'border' : 'border-2'}
          `}
          >
            <span className="px-2 text-xs font-bold leading-3 text-gray-900 uppercase">
              {title}
            </span>

            <span
              className={`flex items-center justify-center  rounded-full
            ${light ? '' : 'border-2 w-8 h-8'}
            `}
            >
              <Icon
                icon={chevronDownIcon}
                className={`w-6 h-6 fill-gray-900 transition ${
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
            <Disclosure.Panel className="relative w-full">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default BasicDisclosure;
