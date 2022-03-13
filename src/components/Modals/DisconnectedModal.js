import Modal from '../Base/Modal';

const DisconnectedModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      title={'Error!'}
      isOpen={isOpen}
      onClose={onClose}
      titleDivider={false}
    >
      <div className="pt-4 pb-8 text-center">
        <h5 className="text-2xl font-medium leading-10 text-gray-600 font-madeOuterSans">
          Wallet disconnected
        </h5>
        <p className="mt-2 font-medium leading-10">
          Please try reconnecting your wallet to complete registration.
        </p>
      </div>
    </Modal>
  );
};

export default DisconnectedModal;
