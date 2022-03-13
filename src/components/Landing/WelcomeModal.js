import Modal from '../Base/Modal';
import RegistrationForm from './RegistrationForm';

const WelcomeModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      title={'Welcome'}
      description={
        'Fill in a username and your email address so you can buy/sell DUNKS!'
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <RegistrationForm onClose={onClose} />
    </Modal>
  );
};

export default WelcomeModal;
