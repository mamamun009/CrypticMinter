import { Menu, Transition } from '@headlessui/react';
import { plusIcon } from '../../../../assets/icons';
import Icon from '../../../Utils/Icon';
import { useNavigate } from 'react-router-dom';

const CreateMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`transition-transform w-[35px] h-[35px] bg-primary rounded-full flex justify-center items-center ${
              open ? '-rotate-45' : ''
            }`}
          >
            <Icon icon={plusIcon} className="w-4.5 h-4.5 fill-white" />
          </Menu.Button>
          <Transition
            show={open}
            enter="transition ease-in duration-100 transform"
            enterFrom="opacity-0 scale-95 "
            enterTo="opacity-100 scale-100  "
            leave="transition ease-out duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute w-40 p-5 mt-1 space-y-4 text-white origin-top -translate-x-1/2 rounded-lg left-1/2 bg-gradient-to-bl from-blue-dark to-blue-dark/70"
            >
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center
                      ${active && ''}
                      `}
                    onClick={() => navigate('/create-single')}
                  >
                    Single
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center
                      ${active && ''}
                      `}
                    onClick={() => navigate('/create-multiple')}
                  >
                    Multiple
                  </button>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm opacity-70">Create Collection</span>
                  <span className="leading-4 text-xxs ">Coming Soon</span>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default CreateMenu;
