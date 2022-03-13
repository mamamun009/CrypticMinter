import Modal from '../Base/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  receiverAddress: '',
};

const validationSchema = Yup.object().shape({
  receiverAddress: Yup.string().required('Required'),
});

const TransferTokenModal = ({ isOpen, onClose }) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Modal title={'Transfer Token'} isOpen={isOpen} onClose={onClose}>
      <div className="relative flex flex-col mt-5">
        <label htmlFor={'receiverAddress'} className="text-lg font-bold ">
          Reciever’s Address
        </label>

        <input
          type={'text'}
          id={'receiverAddress'}
          name={'receiverAddress'}
          placeholder={'0x1746f8...FFA'}
          value={formik.values.receiverAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`
        border-2 py-4 border-gray-300 mt-1 rounded-lg px-5.5 text-gray-800 text-2xl focus:outline-none focus:border-gray-500 focus:ring-0 transition 
        ${
          formik.touched.receiverAddress && formik.errors.receiverAddress
            ? '!border-red '
            : ''
        }
          `}
        />

        {formik.touched.receiverAddress && formik.errors.receiverAddress ? (
          <div className="absolute mt-1 text-sm origin-bottom-left -bottom-5 text-red">
            {formik.errors.receiverAddress}
          </div>
        ) : null}
      </div>

      <p className="text-gray-900 mt-3.5">
        You’ll be requested to sign with your wallet to complete the transfer
      </p>

      <div className="flex justify-center w-full mt-5">
        <button className="px-6 py-4 font-medium leading-4 text-white rounded-md w-80 bg-blue-light font-madeOuterSans">
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default TransferTokenModal;
