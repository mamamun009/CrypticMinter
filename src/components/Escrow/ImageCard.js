import { chevronDownIcon } from '../../assets/icons';
import cardPlaceholderImage from '../../assets/images/card-placeholder.png';
import Icon from '../Utils/Icon';

const ImageCard = () => {
  return (
    <div className="w-full mt-6 rounded-md shadow-lg shadow-gray-600/10 relative overflow-hidden h-full max-h-[400px] ">
      <img
        src={cardPlaceholderImage}
        alt=""
        className="object-cover w-full h-full rounded-md"
      />
      <div className="absolute top-5 right-5">
        <button className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
          <Icon icon={chevronDownIcon} className="w-4 h-4 fill-gray-900" />
        </button>
      </div>

      <div className="absolute flex items-center gap-2 text-xs font-bold leading-3 text-white left-5 bottom-5">
        <span className="p-2 bg-gray-900 rounded">Nike</span>
        <span className="p-2 rounded bg-pink">Air max 97</span>
      </div>
    </div>
  );
};

export default ImageCard;
