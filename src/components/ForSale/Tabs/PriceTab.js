import { Switch } from '@headlessui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { maticBlack } from '../../../assets/icons';
import Icon from '../../Utils/Icon';
import { useNavigate } from 'react-router';

const initialValues = {
  price: 0,
  receiveOffers: false,
};

const validationSchema = Yup.object().shape({
  price: Yup.number().required('Required'),
  receiveOffers: Yup.boolean(),
});

const serviceFee = 2.5;
const toRecieve = (price) => {
  return price * (1 - serviceFee / 100);
};
const convertTo$ = (matic) => {
  return matic * (1 - serviceFee / 100) * 1.5;
};

const PriceTab = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    // submit form and navigate back
    navigate('/view-item');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="py-9">
      <h3 className="font-madeOuterSans font-medium text-lg leading-[22px] mb-5">
        Price
      </h3>
      {/* gray region */}
      <div className="w-full p-6 border border-gray-200 rounded-lg bg-gray-50 ">
        <div className="flex gap-3">
          {/* icon */}
          <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-xl backdrop-blur-xl">
            <Icon icon={maticBlack} className="h-6 fill-primary w-7" />
          </span>
          {/* field */}
          <div className="relative flex-1 text-xl">
            <input
              type="number"
              className={`py-2.5 px-3 w-full bg-white border border-gray-200 rounded-lg  text-gray-500
                ${
                  formik.touched.price && formik.errors.price
                    ? 'border-red'
                    : ''
                }
              `}
              {...formik.getFieldProps('price')}
            />
            <span className="absolute font-medium text-gray-500 uppercase -translate-y-1/2 top-1/2 right-3">
              Matic
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500 ">
          Service fee {serviceFee}%. You will receive
          <span className="mx-1 font-medium text-black">
            {toRecieve(formik.values.price)}
          </span>
          MATIC ~
          <span className="mx-1 font-medium text-black">
            ${convertTo$(formik.values.price)}
          </span>
        </p>
        {/* divider */}
        <div className="w-full h-px my-6 bg-gray-300" />

        <div>
          <div className="flex items-center w-full gap-8 bg-transparent ">
            <div className="flex-1">
              <h5 className="text-lg text-black">Recieve Offers</h5>
              <p className="text-sm text-gray-500">
                Increase chances of sale by receiving offers from buyers
              </p>
            </div>
            <div className="flex-shrink-0">
              <Switch
                checked={formik.values.receiveOffers}
                onChange={(value) => {
                  formik.setFieldValue('receiveOffers', value);
                }}
                className={`${
                  formik.values.receiveOffers ? 'bg-primary' : 'bg-gray-500/70'
                } relative inline-flex items-center h-6 rounded-[32px] w-12
             
            `}
              >
                <span className="sr-only">Recieve Offers</span>
                <span
                  className={`${
                    formik.values.receiveOffers
                      ? 'translate-x-7'
                      : 'translate-x-1'
                  } transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="text-sm text-justify text-gray-500 mt-8.5 ">
        <p>
          Please keep an eye out for email notifications if you’re shipping the
          physical pair as well. We expect you to act promptly as the Escrow
          window only lasts 2 business days before the transaction is
          automatically cancelled and the funds (MATIC) & NFT are returned to
          their respective owner’s wallets.
        </p>
        <p className="mt-3.5">
          *offers will be recieved in Wrapped MATIC (WMATIC)
        </p>
      </div>

      {/* button */}
      <div className="mt-6 ">
        <button
          className="w-full max-w-xs p-4 font-medium leading-4 text-white transition rounded-md font-madeOuterSans bg-blue-dark hover:shadow-md"
          onClick={formik.submitForm}
        >
          List item
        </button>
      </div>
    </div>
  );
};

export default PriceTab;
