import { Switch, Transition } from '@headlessui/react';

const SwitchDisclosure = ({
  title,
  description,
  children,
  className,
  open,
  setOpen,
  disabled,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center w-full gap-4 bg-white md:gap-18 lg:gap-25">
        <div className="flex-1">
          <h5 className="text-sm leading-6 text-gray-900 font-madeOuterSans">
            {title}
          </h5>
          <p className="mt-1 text-xs leading-5 text-gray-500 ">{description}</p>
        </div>
        <div className="flex-shrink-0">
          <Switch
            checked={open}
            onChange={(value) => {
              setOpen(value);
            }}
            className={`${
              open ? 'bg-primary' : 'bg-gray-500/70'
            } relative inline-flex items-center h-6 rounded-[32px] w-12
              ${disabled ? 'opacity-75 ' : ''}
            `}
            disabled={disabled}
          >
            <span className="sr-only">{title}</span>
            <span
              className={`${
                open ? 'translate-x-7' : 'translate-x-1'
              } transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>

      <Transition
        show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0 "
        enterTo="transform scale-100 opacity-100 "
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100 "
        leaveTo="transform scale-95 opacity-0 "
      >
        <div className="mt-3 mb-6">{children}</div>
      </Transition>
    </div>
  );
};

export default SwitchDisclosure;
