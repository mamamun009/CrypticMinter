import { useState, useEffect } from 'react';
import {
  checkIcon,
  chevronDownIcon,
  crossIcon,
  infoIcon,
} from '../../assets/icons';
import Icon from '../Utils/Icon';
import { Tooltip } from 'react-tippy';
import { useLocation, useNavigate } from 'react-router-dom';

const MailingInfo = () => {
  const [trackingId, setTrackingId] = useState('');
  const [textFieldStatus, setTextFieldStatus] = useState('');
  const [supportStatus, setSupportStatus] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  // let shippingStatus = 'not-started';
  const [shippingStatus, setShippingStatus] = useState('not-started');

  useEffect(() => {
    if (query.get('buyer') === 'true') {
      setShippingStatus('started');
      setTimeout(() => {
        setShippingStatus('shipped');
      }, 3000);
    } else {
      setShippingStatus('not-started');
    }
  }, []);

  console.log('shippingStatus', shippingStatus);

  return (
    <div className="w-full mt-6 rounded-md shadow-lg shadow-gray-600/10  p-0.5">
      <div className="flex justify-between items-center p-3.5 border-b">
        <h2 className="text-2xl font-bold font-madeOuterSans">
          Mailing Information
        </h2>
      </div>
      <div className="p-5 border-b">
        <p className="text-sm leading-5 text-left">
          <span className="font-semibold"> Once you’ve shipped the item</span>{' '}
          be sure to upload the{' '}
          <span className="font-semibold">Tracking ID</span> within the given
          time limit. Otherwise you will be charged a penalty and the trade will
          be automatically cancelled in the subsequent 24 hours and funds will
          be returned to the buyer’s wallet.
        </p>
        <div className="flex items-center w-full gap-1 mt-5 ">
          {shippingStatus === 'not-started' && (
            <>
              <input
                type="text"
                className={`border border-black/10 rounded-md p-3 text-xxs leading-4 w-full max-w-[164px]
              ${textFieldStatus === 'invalid' ? 'border-red/40 bg-red/10' : ''}
            `}
                placeholder="Enter tracking ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              {textFieldStatus === 'valid' ? (
                <Icon icon={checkIcon} className="w-4 h-4 fill-green" />
              ) : textFieldStatus === 'invalid' ? (
                <Icon icon={crossIcon} className="w-3 h-3 ml-1 fill-red" />
              ) : (
                <button
                  className="py-3 px-2.5 text-gray-50 rounded-md bg-green text-xs font-medium"
                  onClick={() => {
                    setTextFieldStatus('valid');
                  }}
                >
                  Submit
                </button>
              )}{' '}
            </>
          )}

          {shippingStatus !== 'not-started' && (
            <Tooltip
              disabled={shippingStatus !== 'started'}
              position="top"
              html={
                <div className="relative p-2 mb-2.5 text-center text-white rounded-lg w-60 bg-tooltip ">
                  <p className="text-sm font-medium">Item not shipped yet</p>
                  <span className="absolute w-0 h-0 -translate-x-1/2 border-t-8 border-l-8 border-r-8 -bottom-2 left-1/2 border-l-transparent border-r-transparent border-t-tooltip " />
                </div>
              }
            >
              <button
                className="flex items-center text-sm font-medium leading-6 underline fill-blue-link text-blue-link disabled:text-gray-400 disabled:fill-gray-400"
                disabled={shippingStatus !== 'shipped'}
              >
                Track your order{' '}
                <Icon icon={chevronDownIcon} className="w-4 h-4 -rotate-90 " />
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="flex items-center gap-[30px] p-5">
        <button
          className="bg-blue-light text-white rounded-md px-5.5 py-4 w-full max-w-[219px] font-madeOuterSans font-bold leading-4"
          onClick={() => {
            navigate('/escrow-concluded');
          }}
        >
          View Mailing Label
        </button>
        {shippingStatus === 'not-started' && (
          <div className="flex items-center self-end gap-1 fill-gray-400 text-gray-400 text-xs leading-[10px]">
            <Icon icon={infoIcon} className="w-4 h-4 " />
            You haven’t shipped the item yet
          </div>
        )}
        {shippingStatus !== 'not-started' && (
          <button
            className="bg-white text-gray-900 rounded-md px-5.5 py-4 w-full max-w-[219px] font-madeOuterSans font-bold border leading-4 disabled:opacity-60"
            disabled={
              supportStatus === 'requested' || shippingStatus !== 'shipped'
            }
            onClick={() => {
              setSupportStatus('requested');
            }}
          >
            {supportStatus === 'requested'
              ? 'Support Requested'
              : 'Request Support'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MailingInfo;
