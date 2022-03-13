import { Menu, Transition } from '@headlessui/react';
import { notificationIcon } from '../../../../../assets/icons';
import Icon from '../../../../Utils/Icon';
import notifications from '../../../../../data/notifications';
import NotificationItem from './NotificationItem';

const NotificationMenu = () => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button>
            <Icon icon={notificationIcon} />
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
              className="absolute w-72 origin-top mt-1 right-1/2 translate-x-20 p-5 space-y-4 bg-gradient-to-bl from-blue-dark to-blue-dark/70 rounded-lg text-white"
            >
              {notifications.map((notification) => (
                <Menu.Item>
                  {({ active }) => (
                    <NotificationItem notification={notification} />
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default NotificationMenu;
