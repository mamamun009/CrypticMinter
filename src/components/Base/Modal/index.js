import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Icon from '../../Utils/Icon';
import { crossIcon, loaderIcon } from '../../../assets/icons';

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  overlay = true,
  titleDivider = true,
  closeCross = true,
  className,
  loading,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto "
      >
        <div className={`min-h-screen px-4 text-center  ${className || ''}`}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={`
            ${overlay ? 'fixed inset-0' : ''} bg-black opacity-30`}
            />
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
            <div className="inline-block w-full max-w-xl py-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-[#FCFCFD] px-7 rounded-2xl">
              <div
                className={`flex relative items-center justify-between pb-8 px-1 text-gray-900 ${
                  titleDivider ? 'border-b  border-gray-200' : ''
                }`}
              >
                {title ? (
                  <Dialog.Title className="text-[32px] leading-10 font-medium tracking-tight font-madeOuterSans">
                    {title}
                  </Dialog.Title>
                ) : loading ? (
                  <Dialog.Title className="text-[32px] leading-10 font-medium tracking-tight font-madeOuterSans">
                    Loading
                  </Dialog.Title>
                ) : (
                  <span />
                )}

                {closeCross && (
                  <button
                    className={`flex items-center justify-center w-10 h-10 transition duration-200 border-2 border-gray-300 rounded-full hover:shadow hover:border-gray-400
                  
                  `}
                    onClick={onClose}
                  >
                    <Icon
                      icon={crossIcon}
                      className="w-3.5 h-3.5 fill-gray-600"
                    />
                  </button>
                )}
              </div>
              <div className="px-1">
                {description && (
                  <Dialog.Description className="text-gray-900 mt-3.5">
                    {description}
                  </Dialog.Description>
                )}

                {loading && (
                  <div className="flex items-center justify-center w-full p-24 ">
                    <Icon
                      icon={loaderIcon}
                      className="animate-spin-loader fill-gray-600  w-[50px] h-[50px]"
                    />
                  </div>
                )}

                {!loading && children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
