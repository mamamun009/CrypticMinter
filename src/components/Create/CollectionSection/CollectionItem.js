import { checkExcludedIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const CollectionItem = ({ image, title, selected, setSelected }) => {
  return (
    <button
      className={`relative flex-shrink-0 w-40 overflow-hidden text-left transition snap-start rounded-2xl bg-clip-border border-4 border-transparent ${
        selected ? 'border-blue-light' : ''
      }
      `}
      onClick={setSelected}
    >
      <img
        src={image}
        alt="collection"
        className="absolute object-cover w-full h-full"
      />

      <div className="relative flex flex-col justify-between h-full p-5 bg-gradient-to-b from-[#1A233A]/0 to-[#141416]">
        <span>
          {selected && (
            <Icon icon={checkExcludedIcon} className="w-5 h-5 fill-gray-50" />
          )}
        </span>

        <span className="text-sm font-medium leading-4 font-madeOuterSans text-gray-50">
          {title}
        </span>
      </div>
    </button>
  );
};

export default CollectionItem;
