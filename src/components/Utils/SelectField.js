import { useState } from 'react';
import { chevronDownIcon } from '../../assets/icons';
import Icon from './Icon';
import { Transition } from '@headlessui/react';

const SelectField = ({
  label,
  selected,
  setSelected,
  options,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col flex-1 mt-2.5">
      <label htmlFor="range" className="text-lg font-medium leading-3">
        {label}
      </label>

      <div
        className=" flex items-center relative mt-2.5 py-2.5 px-3 min-h-[48px] font-medium text-sm w-full bg-white border border-gray-200 rounded-lg  text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options?.find((option) => option.value === selected)?.label ||
          placeholder ||
          ' '}
        <span className="absolute -translate-y-1/2 top-1/2 right-3">
          <Icon icon={chevronDownIcon} className="w-6 h-6 fill-gray-900" />
        </span>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out z-40"
        enterFrom="transform  opacity-0 "
        enterTo="transform  opacity-100 "
        leave="transition duration-75 ease-out z-40"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0 "
      >
        <div className="absolute z-40 w-full px-4 -mt-1 bg-white border border-t-0 border-gray-200 rounded-b-lg">
          {options
            ?.filter((option) => option.value !== selected)
            .map((option) => (
              <button
                key={option.value}
                className="py-2.5 block w-full font-medium text-sm leading-6 text-gray-900 border-t border-t-200 text-left transition hover:bg-gray-50 "
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
        </div>
      </Transition>
    </div>
  );
};

export default SelectField;
