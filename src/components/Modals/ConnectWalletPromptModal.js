import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Icon from '../Utils/Icon';
import { crossIcon, walletsIcon } from '../../assets/icons';

const ConnectWalletPromptModal = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4.5 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={`fixed inset-0 bg-black opacity-30`} />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full relative max-w-[484px] py-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl  rounded-2xl">
              <div
                className={`flex relative items-center justify-between px-1 text-gray-900`}
              >
                <button
                  className="absolute top-0 flex items-center justify-center flex-shrink-0 w-10 h-10 transition duration-200 border-2 border-gray-300 rounded-full right-6 hover:shadow hover:border-gray-400"
                  onClick={onClose}
                >
                  <Icon
                    icon={crossIcon}
                    className="w-3.5 h-3.5 fill-gray-600"
                  />
                </button>
              </div>
              <div className="flex justify-center w-full pt-1">
                <Icon icon={walletsIcon} />
              </div>
              <div className="px-2 mt-5">
                <Dialog.Description className="font-medium leading-6 text-center text-gray-900 ">
                  You need to connect your wallet first to sign messages and
                  send transaction to MATIC network
                </Dialog.Description>

                <div className="flex justify-center mt-4">
                  <button
                    className="w-full max-w-xs p-4 font-medium leading-none text-white transition rounded-md bg-blue-dark font-madeOuterSans hover:shadow-md"
                    onClick={onClose}
                  >
                    View Item
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConnectWalletPromptModal;
