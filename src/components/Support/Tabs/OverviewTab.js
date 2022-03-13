import { Fragment } from 'react';
import { badgeIcon, crossIcon, notificationImage } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const creators1 = [
  {
    image: notificationImage,
    name: 'Selina Mayert',
    verified: true,
    creator: 100,
  },
];

const creators2 = [
  {
    image: notificationImage,
    name: 'Selina Mayert',
    verified: true,
    creator: 30,
  },
  {
    image: notificationImage,
    name: 'Anglina',
    verified: true,
    creator: 70,
  },
];

const OverviewTab = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        {/* profile image */}
        <div className="flex -space-x-5 ">
          {creators1.map((creator, index) => (
            <div className="relative " key={index}>
              <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full">
                <img
                  src={creator.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              {creator.verified && (
                <Icon
                  icon={badgeIcon}
                  className="absolute bottom-0 right-1.5"
                />
              )}
            </div>
          ))}
        </div>
        {/* details */}
        <div className="flex items-center pl-4">
          {creators1.map((creator, index) => (
            <Fragment key={index}>
              <div className="text-gray-900 ">
                <h5 className="text-sm font-medium leading-4 font-madeOuterSans">
                  {creator.name || creator.id}
                </h5>
                <span className="text-xs leading-4 ">
                  {creator.creator === 100 ? (
                    'Creator'
                  ) : (
                    <>
                      Creator{' '}
                      <span className="font-bold text-blue-light">
                        {creator.creator}%
                      </span>
                    </>
                  )}
                </span>
              </div>
              {index !== creators1.length - 1 && (
                <Icon icon={crossIcon} className="w-3 h-3 mx-5 fill-gray-600" />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="w-full h-px mt-4 mb-8 bg-gray-200" />

      {/* description */}
      <div className="">
        <p className="text-sm text-gray-600  leading-[22px]">
          The Doge Pound is 10,000 art pieces carefully chosen by Professor
          Elon. A unique digital collection of diverse NFTs lying on Ethereum
          Blockchain. Each one is thoughtfully designed, specifically picked,
          and impeccably shaped.
        </p>
        {/* tags */}
        <div className="flex gap-2 mt-8">
          <span className="p-2 text-xs font-medium leading-3 text-gray-900 uppercase border border-gray-300 rounded-md">
            Nike
          </span>
          <span className="p-2 text-xs font-medium leading-3 text-gray-900 uppercase border border-gray-300 rounded-md">
            Air max 97
          </span>
          <span className="p-2 text-xs font-medium leading-3 text-gray-900 uppercase border border-gray-300 rounded-md">
            Shoes
          </span>
          <span className="p-2 text-xs font-bold leading-3 text-white uppercase rounded-md bg-primary">
            unlockable
          </span>
        </div>
      </div>

      {/* divider */}
      <div className="w-full h-px mt-8 mb-6 bg-gray-200" />

      {/* properties */}
      <div>
        <h4 className="text-xs font-bold leading-3 text-gray-400 uppercase ">
          Properties
        </h4>
        <div className="text-gray-800 mt-3.5 w-full py-1 px-2.5 divide-y flex flex-col items-stretch border border-gray-400 rounded-md ">
          <div className="flex justify-between py-2.5">
            <span className="text-sm font-medium leading-4 ">BRAND</span>
            <span className="text-sm font-medium leading-4 font-madeOuterSans">
              NIKE
            </span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-sm font-medium leading-4 ">MODEL</span>
            <span className="text-sm font-medium leading-4 font-madeOuterSans">
              AIR FORCE 1
            </span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-sm font-medium leading-4 ">SIZE</span>
            <span className="text-sm font-medium leading-4 font-madeOuterSans">
              US 10.5
            </span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-sm font-medium leading-4 ">
              ATOMIC NUMBER
            </span>
            <span className="text-sm font-medium leading-4 font-madeOuterSans">
              85
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
