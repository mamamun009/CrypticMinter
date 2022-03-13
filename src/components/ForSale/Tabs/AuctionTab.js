import { useState } from 'react';
import { Switch, Transition } from '@headlessui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { maticMIcon, chevronDownIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';
import { useNavigate } from 'react-router-dom';
import SelectField from './SelectField';
import dayjs from 'dayjs';
import DatePicker from './DatePicker';

const serviceFee = 2.5;
const toRecieve = (price) => {
  return price * (1 - serviceFee / 100);
};
const convertTo$ = (matic) => {
  return matic * (1 - serviceFee / 100) * 1.5;
};

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
  {
    label: 'Custom',
    value: 'custom',
  },
];

const initialValues = {
  price: 0,
  reservePrice: false,
  reservedPrice: 0,
  range: '1 day',
  startingDate: dayjs().toDate(),
  endingDate: dayjs().add(1, 'day').toDate(),
};

const validationSchema = Yup.object().shape({
  price: Yup.number().required('Required'),
  reservePrice: Yup.boolean(),
  reservedPrice: Yup.number().when('reservePrice', {
    is: true,
    then: Yup.number().required('Required'),
  }),
  range: Yup.string().required('Required'),
  startingDate: Yup.string().required('Required'),
  endingDate: Yup.string().required('Required'),
});

const AuctionTab = () => {
  const [showCalender, setShowCalender] = useState(false);
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
      {/* gray region 1 */}
      <div className="w-full p-6 border border-gray-200 rounded-lg bg-gray-100/50 ">
        <div className="flex gap-3">
          {/* icon */}
          <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-xl backdrop-blur-xl">
            <Icon icon={maticMIcon} className="w-6 h-5" />
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
              WMatic
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
              <h5 className="text-lg text-black">Reserve Price</h5>
              <p className="text-sm text-gray-500">
                If you don't receive any bids equal to or greater than your
                reserve, the auction will end without a sale.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Switch
                checked={formik.values.reservePrice}
                onChange={(value) => {
                  formik.setFieldValue('reservePrice', value);
                }}
                className={`${
                  formik.values.reservePrice ? 'bg-primary' : 'bg-gray-500/70'
                } relative inline-flex items-center h-6 rounded-[32px] w-12
             
            `}
              >
                <span className="sr-only">Recieve Offers</span>
                <span
                  className={`${
                    formik.values.reservePrice
                      ? 'translate-x-7'
                      : 'translate-x-1'
                  } transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full`}
                />
              </Switch>
            </div>
          </div>
          <Transition
            show={formik.values.reservePrice}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0 "
            enterTo="transform scale-100 opacity-100 "
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100 "
            leaveTo="transform scale-95 opacity-0 "
          >
            <div className="mt-2.5">
              <div className="relative flex-1 text-xl">
                <input
                  type="number"
                  className={`py-2.5 px-3 w-full bg-white border border-gray-200 rounded-lg  text-gray-500
                ${
                  formik.touched.reservedPrice && formik.errors.reservedPrice
                    ? 'border-red'
                    : ''
                }
              `}
                  {...formik.getFieldProps('reservedPrice')}
                />
                <span className="absolute font-medium text-gray-500 uppercase -translate-y-1/2 top-1/2 right-3">
                  WMatic
                </span>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <h3 className="font-madeOuterSans font-medium text-lg leading-[22px] mb-5 mt-12">
        Auction Period
      </h3>

      {/* gray region 2 */}
      <div className="relative w-full p-6 border border-gray-200 rounded-lg bg-gray-100/50">
        {/* calender */}
        {showCalender && (
          <div className="absolute z-40 translate-x-full -right-2">
            <DatePicker
              startDate={formik.values.startingDate}
              endDate={formik.values.endingDate}
              setStartDate={(value) =>
                formik.setFieldValue('startingDate', value)
              }
              setEndDate={(value) => formik.setFieldValue('endingDate', value)}
              onClose={() => setShowCalender(false)}
            />
          </div>
        )}

        {/* field */}
        <SelectField
          label="Range"
          selected={formik.values.range}
          options={rangeOptions}
          setSelected={(value) => {
            formik.setFieldValue('range', value);
            if (value === '1 day') {
              formik.setFieldValue('startingDate', dayjs().toDate());
              formik.setFieldValue('endingDate', dayjs().toDate());
              setShowCalender(false);
            }
            if (value === '3 days') {
              formik.setFieldValue('startingDate', dayjs().toDate());
              formik.setFieldValue(
                'endingDate',
                dayjs().add(3, 'days').toDate()
              );
              setShowCalender(false);
            }
            if (value === '1 week') {
              formik.setFieldValue('startingDate', dayjs().toDate());
              formik.setFieldValue(
                'endingDate',
                dayjs().add(1, 'week').toDate()
              );
              setShowCalender(false);
            }
            if (value === '1 month') {
              formik.setFieldValue('startingDate', dayjs().toDate());
              formik.setFieldValue(
                'endingDate',
                dayjs().add(1, 'month').toDate()
              );
              setShowCalender(false);
            }
            if (value === 'custom') {
              formik.setFieldValue('startingDate', dayjs().toDate());
              formik.setFieldValue('endingDate', dayjs().toDate());
              setShowCalender(true);
            }
          }}
        />
        <p className="mt-3 text-sm text-gray-500 ">
          The auction starts as soon as you list the item.
        </p>
        {/* divider */}
        <div className="w-full h-px mt-1.5 mb-3.5 bg-gray-300" />

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="flex-1">
            <h5 className="text-lg font-medium">Starting Date</h5>
            <div className="relative mt-4 text-xl">
              <div
                className={`flex items-center relative py-2.5 px-3 min-h-[48px] font-medium text-sm w-full bg-white border border-gray-200 rounded-lg  text-gray-900
                ${
                  formik.values.range === 'custom'
                    ? 'cursor-pointer'
                    : 'opacity-80'
                }
              `}
                onClick={() => {
                  if (formik.values.range === 'custom') {
                    setShowCalender(true);
                  }
                }}
              >
                {' '}
                {dayjs(formik.values.startingDate).format('MMM DD, YYYY')}
                <span className="absolute -translate-y-1/2 top-1/2 right-3">
                  <Icon
                    icon={chevronDownIcon}
                    className="w-6 h-6 fill-gray-900"
                  />
                </span>
              </div>
            </div>
          </div>

          <span className="hidden pt-12 text-sm font-medium xl:block ">_</span>

          <div className="flex-1">
            <h5 className="text-lg font-medium">Ending Date</h5>
            <div className="relative w-full mt-4 text-xl">
              <div
                className={`flex items-center relative py-2.5 px-3 min-h-[48px] font-medium text-sm w-full bg-white border border-gray-200 rounded-lg  text-gray-900
                ${
                  formik.values.range === 'custom'
                    ? 'cursor-pointer'
                    : 'opacity-80'
                }
              `}
                onClick={() => {
                  if (formik.values.range === 'custom') {
                    setShowCalender(true);
                  }
                }}
              >
                {dayjs(formik.values.endingDate).format('MMM DD, YYYY')}
                <span className="absolute -translate-y-1/2 top-1/2 right-3">
                  <Icon
                    icon={chevronDownIcon}
                    className="w-6 h-6 fill-gray-900"
                  />
                </span>
              </div>
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
          *Any bid placed in the last 10 minutes extends the auction by 10
          minutes.
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

export default AuctionTab;
