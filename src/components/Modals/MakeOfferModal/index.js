import { useState } from 'react';
import Modal from '../../Base/Modal';
import Icon from '../../Utils/Icon';
import { arrowLeftIcon } from '../../../assets/icons';
import OfferForm from './OfferForm';
import Convert from './Convert';

const MakeOfferModal = ({ isOpen, onClose, ownMatics }) => {
  const [loading, setLoading] = useState(true);
  const [toConvert, setToConvert] = useState(false);

  return (
    <Modal
      title={
        toConvert ? (
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center justify-center w-10 h-10 transition duration-200 border-2 border-gray-300 rounded-full hover:shadow hover:border-gray-400`}
              onClick={() => setToConvert(false)}
            >
              <Icon icon={arrowLeftIcon} className="w-6 h-6 fill-gray-600" />
            </button>
            Convert MATIC
          </div>
        ) : (
          'Make an offer'
        )
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      {toConvert ? (
        <Convert loading={loading} setLoading={setLoading} />
      ) : (
        <OfferForm ownMatics={ownMatics} setToConvert={setToConvert} />
      )}
    </Modal>
  );
};

export default MakeOfferModal;
