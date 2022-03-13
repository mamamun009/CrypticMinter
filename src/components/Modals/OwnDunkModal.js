import { useState } from 'react';
import { Tooltip } from 'react-tippy';
import { checkboxCheck, maticBlack } from '../../assets/icons';
import Modal from '../Base/Modal';
import Icon from '../Utils/Icon';

const OwnDunkModal = ({ isOpen, onClose, dunk, ownMatics }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <Modal title={'Own this Dunk'} isOpen={isOpen} onClose={onClose}>
      <div className="w-full mt-4">
        <div className="flex items-center gap-7.5 w-full">
          <div className="w-20 h-20 overflow-hidden rounded-lg aspect-square">
            <img
              src={dunk.image}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center justify-between flex-1">
            <div className="">
              <h3 className="text-gray-800 font-madeOuterSans">{dunk.title}</h3>
              <p className="mt-1 text-sm">
                by <span className="text-blue-light">{dunk.owner.name}</span>
              </p>
              <span className="text-xs font-medium text-gray-500">
                {dunk.royalty}% royalty
              </span>
            </div>
            <div className="flex flex-col items-center text-right">
              <div className="flex items-center gap-1">
                <Icon icon={maticBlack} className="w-3 h-3 fill-primary " />
                <span className="text-sm font-semibold text-gray-900">
                  {dunk.price}
                </span>
              </div>
              <span className="text-xs">${dunk.dollars}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <p className="">
          {' '}
          <span className="font-bold">Total</span> inc. shipping
        </p>
        <span className="p-1 text-sm font-bold leading-4 border rounded text-green font-madeOuterSans border-green">
          {dunk.price} MATIC
        </span>
      </div>

      <div className="flex items-center mt-[35px]">
        <button
          id="agreeTerms"
          className={`w-4.5 h-4.5 border border-gray-400 flex justify-center items-center rounded`}
          onClick={() => {
            setAgreeTerms(!agreeTerms);
          }}
        >
          {agreeTerms && <Icon icon={checkboxCheck} />}
        </button>
        <label htmlFor="agreeTerms" className="ml-3 text-sm">
          By checking this box, I agree to DunkSwap’s Terms of Service
        </label>
      </div>

      <div className="flex justify-center w-full gap-2 mt-9">
        <Tooltip
          disabled={dunk.price <= ownMatics}
          position="top"
          html={
            <div className="relative p-2 mb-2.5 text-center text-white rounded-lg w-60 bg-tooltip ">
              <p className="text-sm font-medium">Not enough MATIC to buy </p>
              <span className="absolute w-0 h-0 -translate-x-1/2 border-t-8 border-l-8 border-r-8 -bottom-2 left-1/2 border-l-transparent border-r-transparent border-t-tooltip " />
            </div>
          }
        >
          <button
            className="w-48 px-6 py-4 font-medium leading-4 text-gray-100 rounded-md bg-blue-light font-madeOuterSans disabled:opacity-50 "
            onClick={() => {}}
            disabled={dunk.price > ownMatics && agreeTerms}
          >
            Checkout
          </button>
        </Tooltip>
      </div>
    </Modal>
  );
};

export default OwnDunkModal;
