import { Menu, Transition } from '@headlessui/react';
import {
  ethIcon,
  maticIcon,
  profileIcon,
  usdtIcon,
} from '../../../../assets/icons';
import Icon from '../../../Utils/Icon';
import { useNavigate } from 'react-router-dom';
import truncateText from '../../../../utils/truncateText';

const ProfileMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button>
            <Icon icon={profileIcon} />
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
              className="absolute w-[184px] origin-top mt-1 left-1/2 -translate-x-1/2  p-5 space-y-4 bg-gradient-to-bl from-blue-dark to-blue-dark/70 rounded-lg text-white"
            >
              <Menu.Item disabled>
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm">
                    {truncateText('0x1746f8601234asdvrdffa', 11)}
                  </span>
                  <button className="text-xxs text-[#6f8fe9] ">
                    Set display name
                  </button>
                </div>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center
                      ${active && ''}
                      `}
                  >
                    <Icon icon={usdtIcon} />
                    <span className="ml-2 text-sm font-medium">
                      {' '}
                      {'0'} USDT
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
                    <Icon icon={ethIcon} />
                    <span className="ml-2 text-sm font-medium"> {'0'} ETH</span>
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
                    <Icon icon={maticIcon} />
                    <span className="ml-2 text-sm font-medium">
                      {' '}
                      {'0'} MATIC
                    </span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center text-sm font-medium 
                      ${active && ''}
                      `}
                    onClick={() => navigate('/profile')}
                  >
                    My Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center text-sm font-medium
                      ${active && ''}
                      `}
                  >
                    My Collection
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center text-sm font-medium
                      ${active && ''}
                      `}
                    onClick={() => navigate('/activity')}
                  >
                    Activity
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center text-sm font-medium
                      ${active && ''}
                      `}
                    onClick={() => navigate('/profile/edit')}
                  >
                    Account Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`
                        flex items-center text-sm font-medium
                      ${active && ''}
                      `}
                    onClick={() => {
                      localStorage.removeItem('user');
                      navigate('/');
                    }}
                  >
                    Disconnect
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

export default ProfileMenu;
