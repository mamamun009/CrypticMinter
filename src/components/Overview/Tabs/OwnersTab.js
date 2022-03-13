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

const OwnersTab = () => {
  return (
    <div>
      {/* profile image */}
      {creators1.map((creator) => (
        <div className="flex items-center pt-4">
          <div className="flex -space-x-5 ">
            <div className="relative ">
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
          </div>
          <div className="flex items-center pl-4">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default OwnersTab;
