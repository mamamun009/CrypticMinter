import Modal from '../Base/Modal';

const ErrorModal = ({ isOpen, onClose }) => {
  return (
    <Modal title={'Error'} isOpen={isOpen} onClose={onClose} closeCross={false}>
      <p className="mt-5">
        <span className="font-bold ">MetaMask Tx Signature:</span> User denied
        transaction signature.. If the problem persists please{' '}
        <button className="text-blue-link">Contact support</button>
      </p>
      <div className="flex justify-center gap-2 mt-10">
        <button className="w-48 rounded-md bg-blue-light text-white py-4 px-5.5 leading-4 font-bold font-madeOuterSans">
          Try Again
        </button>
        <button
          className="w-48 rounded-md bg-[#404040] text-white py-4 px-5.5 leading-4 font-bold font-madeOuterSans"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
