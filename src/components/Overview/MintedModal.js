import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Icon from '../Utils/Icon';
import { crossIcon, partyPoppers } from '../../assets/icons';

const MintedModal = ({ isOpen, onClose }) => {
  const [pop, setPop] = useState(false);
  const [hidePop, setHidePop] = useState(false);
  const [displayPop, setDisplayPop] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setPop(true);
      }, 300);

      setTimeout(() => {
        setHidePop(false);
      }, 1000);

      setTimeout(() => {
        setDisplayPop(false);
      }, 1300);
    } else {
      setTimeout(() => {
        setPop(false);
        setHidePop(true);
        setDisplayPop(true);
      }, 400);
    }
  }, [isOpen]);

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
            <div className="inline-block w-full relative max-w-[484px] py-6 my-8  text-left align-middle transition-all transform bg-white shadow-xl px-7 rounded-2xl">
              <div
                className={`flex relative items-center justify-between px-1 text-gray-900`}
              >
                <span />
                <button
                  className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition duration-200 border-2 border-gray-300 rounded-full hover:shadow hover:border-gray-400"
                  onClick={onClose}
                >
                  <Icon
                    icon={crossIcon}
                    className="w-3.5 h-3.5 fill-gray-600"
                  />
                </button>
              </div>
              <Dialog.Title className="text-[40px] px-10 leading-[54px] text-center font-medium tracking-tight font-madeOuterSans text-transparent bg-clip-text bg-gradient-to-tr from-[#333089] via-[#6b4ebb] to-[#9061dd]">
                Your NFT has been minted!
              </Dialog.Title>
              <div className="px-1">
                <Dialog.Description className="mt-10 leading-6 text-center text-gray-900">
                  Congratualtion! Time to show off your dunks to everyone in the
                  metaverse. Let’s get them listed for sale
                </Dialog.Description>

                <div className="flex justify-center mt-6">
                  <button
                    className="w-full max-w-xs p-4 font-medium leading-none text-white transition rounded-lg bg-blue-dark font-madeOuterSans hover:shadow-md"
                    onClick={onClose}
                  >
                    View Item
                  </button>
                </div>
              </div>

              <div
                className={`absolute -translate-x-1/2 scale-0 -translate-y-1/2 top-1/2 left-1/2 
                ${hidePop ? '' : 'opacity-0'}
                ${displayPop ? '' : 'hidden'}
                ${pop ? 'scale-[5]' : ''}
                transition-all duration-300 ease-in-out
              `}
              >
                <Icon icon={partyPoppers} />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MintedModal;
