import { Menu, Transition } from '@headlessui/react';
import Icon from '../Utils/Icon';
// import { useNavigate } from 'react-router-dom';
import {
  facebookIcon,
  instagramIcon,
  shareIcon,
  twitterIcon,
} from '../../assets/icons';

const ShareMenu = () => {
  // const navigate = useNavigate();

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center justify-center transition bg-gray-100 rounded-full hover:shadow-sm w-9 h-9 fill-gray-700 hover:fill-gray-800`}
          >
            <Icon icon={shareIcon} className="w-5 h-5 " />
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
              className="absolute p-5 mt-2 space-y-4 text-white origin-top -translate-x-1/2 rounded-lg shadow-md w-52 left-1/2 bg-gradient-to-bl from-blue-dark to-blue-dark/70"
            >
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center
                      ${active && ''}
                      `}
                  >
                    <Icon icon={twitterIcon} />
                    <span className="ml-2 text-sm font-medium">
                      Share on Twitter
                    </span>
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
                  >
                    <Icon icon={instagramIcon} />
                    <span className="ml-2 text-sm font-medium">
                      Share on Instagram
                    </span>
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
                  >
                    <Icon icon={facebookIcon} />
                    <span className="ml-2 text-sm font-medium">
                      Share on Facebook
                    </span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default ShareMenu;
