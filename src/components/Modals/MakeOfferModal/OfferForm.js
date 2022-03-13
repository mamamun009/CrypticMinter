import Icon from '../../Utils/Icon';
import { checkboxCheck, maticMIcon } from '../../../assets/icons';
import { Tooltip } from 'react-tippy';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SelectField from './SelectField';

const rangeOptions = [
  {
    label: '1 day',
    value: '1 day',
  },
  {
    label: '3 days',
    value: '3 days',
  },
  {
    label: '1 week',
    value: '1 week',
  },
  {
    label: '1 month',
    value: '1 month',
  },
];

const OfferForm = ({ ownMatics, setToConvert }) => {
  const initialValues = {
    price: 0,
    expiration: '1 week',
    agreeTerms: false,
  };

  const validationSchema = Yup.object().shape({
    price: Yup.string()
      .required('Price is required')
      .matches(/^\d+$/, 'Please input a valid number!'),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      'You must agree to the terms and conditions'
    ),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h3 className="mt-5 text-lg font-bold ">Price</h3>
      <div className="pt-1 text-center pb-14">
        <div className="flex items-center gap-3">
          {/* icon */}
          <span className="flex items-center justify-center flex-shrink-0 bg-white rounded-full shadow-xl shadow-gray-500/10 w-14 h-14 backdrop-blur-xl">
            <Icon icon={maticMIcon} className="h-8 w-9" />
          </span>
          {/* field */}
          <div className="relative flex-1 text-xl">
            <input
              type="text"
              className={`py-3 px-5.5 w-full leading-8 text-xl bg-white border-2 border-gray-200 rounded-lg  text-gray-500
                ${
                  formik.touched.price && formik.errors.price
                    ? '!border-red !ring-red'
                    : ''
                }
              `}
              {...formik.getFieldProps('price')}
            />
            <span className="absolute font-medium uppercase -translate-y-1/2 text-gray-500/80 top-1/2 right-3">
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

      <SelectField
        label="Expiration"
        selected={formik.values.expiration}
        options={rangeOptions}
        setSelected={(value) => {
          formik.setFieldValue('expiration', value);
        }}
      />

      <div className="flex items-center mt-8">
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

export default OfferForm;
