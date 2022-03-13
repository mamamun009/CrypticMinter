import Icon from '../../Utils/Icon';
import { checkboxCheck, maticMIcon } from '../../../assets/icons';
import { Tooltip } from 'react-tippy';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BidForm = ({ reservedPrice, ownMatics, setToConvert, onClose }) => {
  const initialValues = {
    price: 0,
    agreeTerms: false,
  };

  const validationSchema = Yup.object().shape({
    price: Yup.string()
      .required('Price is required')
      .matches(/^\d+$/, 'Please input a valid number!')
      .test(
        'is-greater-than-reserved-price',
        `Bid must be greater than the reserve of ${reservedPrice} MATIC`,
        (value) => {
          return Number(value) > Number(reservedPrice);
        }
      ),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      'You must agree to the terms and conditions'
    ),
  });

  const onSubmit = (values) => {
    console.log(values);
    onClose?.();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h3 className="mt-5 text-lg font-bold ">Price</h3>
      <div className="pt-1 pb-8 text-center">
        <div className="flex items-center gap-3">
          {/* icon */}
          <span className="flex items-center justify-center flex-shrink-0 bg-white rounded-full shadow-lg shadow-gray-500/20 w-14 h-14 backdrop-blur-xl">
            <Icon icon={maticMIcon} className="h-8 w-9" />
          </span>
          {/* field */}
          <div className="relative flex-1 text-xl">
            <input
              type="text"
              className={`py-3 px-5.5 w-full leading-8 text-xl bg-white border border-gray-200 rounded-md  text-gray-500
                ${
                  formik.touched.price && formik.errors.price
                    ? '!border-red !ring-red'
                    : ''
                }
              `}
              {...formik.getFieldProps('price')}
            />
            <span className="absolute font-medium text-gray-500 uppercase -translate-y-1/2 top-1/2 right-3">
              WMatic
            </span>
            {formik.touched.price && formik.errors.price ? (
              <span className="absolute left-0 mt-1 text-sm origin-bottom-left -bottom-6 text-red">
                {formik.errors.price}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-9">
        <button
          id="agreeTerms"
          className={`w-4.5 h-4.5 border  flex justify-center items-center rounded
              ${
                formik.touched.agreeTerms && formik.errors.agreeTerms
                  ? 'border-red'
                  : 'border-gray-400'
              }
          `}
          onClick={() => {
            formik.setFieldValue('agreeTerms', !formik.values.agreeTerms);
          }}
        >
          {formik.values.agreeTerms && <Icon icon={checkboxCheck} />}
        </button>
        <label htmlFor="agreeTerms" className="ml-3 text-sm">
          By checking this box, I agree to DunkSwap’s Terms of Service
        </label>
      </div>

      <div className="flex justify-center w-full gap-2 mt-9">
        <Tooltip
          disabled={formik.values.price <= ownMatics}
          position="top"
          html={
            <div className="relative p-2 mb-2.5 text-center text-white rounded-lg w-60 bg-tooltip ">
              <p className="text-sm font-medium">Not enough MATIC to bid</p>
              <span className="absolute w-0 h-0 -translate-x-1/2 border-t-8 border-l-8 border-r-8 -bottom-2 left-1/2 border-l-transparent border-r-transparent border-t-tooltip " />
            </div>
          }
        >
          <button
            className="w-48 px-6 py-4 font-medium leading-4 text-gray-100 rounded-md bg-blue-light font-madeOuterSans disabled:opacity-50 "
            onClick={formik.submitForm}
            disabled={formik.values.price > ownMatics}
          >
            Make Offer
          </button>
        </Tooltip>
        <button
          className="w-48 px-6 py-4 font-medium leading-4 text-gray-100 rounded-md bg-blue-light font-madeOuterSans"
          onClick={() => setToConvert(true)}
        >
          Convert MATIC
        </button>
      </div>
    </>
  );
};

export default BidForm;
