import { badgeIcon, notificationImage } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const offers1 = [
  {
    image: notificationImage,
    name: 'Selina Mayert',
    verified: true,
    offer: 0.365,
    time: '9/20/2021, 9:05 PM',
  },
];

const offers2 = [
  {
    image: notificationImage,
    name: 'Selina Mayert',
    verified: true,
    offer: 0.365,
    time: '9/20/2021, 9:05 PM',
  },
  {
    image: notificationImage,
    name: 'Anglina',
    verified: true,
    offer: 0.365,
    time: '9/20/2021, 9:05 PM',
  },
];

const OffersTab = () => {
  return (
    <div>
      {/* profile image */}
      {offers2.map((offer) => (
        <div className="flex items-center pt-4">
          <div className="flex -space-x-5 ">
            <div className="relative ">
              <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full">
                <img
                  src={offer.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              {offer.verified && (
                <Icon
                  icon={badgeIcon}
                  className="absolute bottom-0 right-1.5"
                />
              )}
            </div>
          </div>
          <div className="flex items-center pl-4">
            <div className="text-gray-900 ">
              <h5 className="text-sm font-medium leading-4 font-madeOuterSans">
                {offer.offer} ETH
                <span className="mx-2 text-gray-600">-</span>
                {offer.name || offer.id}
              </h5>
              <span className="text-xs font-medium leading-4  text-black/50">
                {offer.time}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersTab;
