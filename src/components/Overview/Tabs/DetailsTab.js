import {
  barcodeIcon,
  ethPurple,
  logoInner,
  qrIcon,
  notificationImage,
  crossIcon,
} from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const creators1 = [
  {
    image: notificationImage,
    name: 'Selina Mayert',
    verified: true,
    creator: 100,
    qr: qrIcon,
  },
];

const creators2 = [
  {
    image: notificationImage,
    name: 'Selina Mayert',
    verified: true,
    creator: 30,
    qr: qrIcon,
  },
  {
    image: notificationImage,
    name: 'Anglina',
    verified: true,
    creator: 70,
    qr: qrIcon,
  },
];

const DetailsTab = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-2 mt-8 border">
      <div className="absolute top-2.5 left-2.5">
        <Icon icon={ethPurple} />
      </div>

      <div className="mt-2.5">
        <Icon icon={logoInner} />
      </div>

      <div className="w-full py-1 mt-3 text-2xl font-bold text-center text-white bg-black font-madeOuterSans">
        dunkswap.com
      </div>

      <div className="flex w-full px-10 mt-6">
        <div className="flex flex-col flex-1 text-sm tracking-wider leading-[18.85px] font-light font-madeOuterSans border-b border-black">
          <h5>Created by</h5>
          {creators1.map((creator, index) => (
            <>
              {index !== creators1.length - 1 && (
                <Icon icon={crossIcon} className="w-3 h-3 my-1 fill-gray-600" />
              )}

              <h5>{creator.name}</h5>
            </>
          ))}
        </div>
        <div className="flex flex-col items-center flex-shrink pl-5">
          {creators1.map((creator, index) => (
            <div
              className={`flex-shrink ${
                creators1.length > 1 ? 'scale-75' : ''
              }`}
            >
              <img
                src={creator.qr}
                alt="qr"
                className={`object-contain w-full h-full `}
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-medium tracking-wider text-center font-madeOuterSans text-black/30">
        1 of 1 Edition
      </h3>

      <div className="w-full mt-6">
        <Icon icon={barcodeIcon} className="w-full" />

        <div className="flex justify-between w-full px-2 mt-2 text-sm font-medium font-madeOuterSans">
          <span>ERC-721</span>
          <span>Token-ID 9383</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsTab;
