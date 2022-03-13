import Card from '../../Base/Card';
import { loaderIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const LikedTab = ({ cards }) => {
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-3 gap-8 ">
        {cards.map((item) => (
          <Card item={item} button />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-gray-900 border-2 rounded-full fill-gray-900">
          <Icon icon={loaderIcon} className="w-3 h-3 " />
          Loading
        </div>
      </div>
    </div>
  );
};

export default LikedTab;
