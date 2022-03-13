import Icon from '../Utils/Icon';
import { chevronDownIcon } from '../../assets/icons';

const WalletItem = ({ image, name, onClick }) => {
  return (
    <button
      className="flex items-center w-full max-w-lg gap-10 transition hover:bg-gray-100 hover:shadow bg-gray-50 py-4 px-6.5 rounded-xl box-border border-[0.5px]"
      onClick={onClick}
    >
      <div className="w-[68px] h-[68px] flex items-center justify-center">
        <img src={image} alt="MetaMask" className="" />
      </div>
      <div className="flex items-center justify-between flex-1">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <Icon icon={chevronDownIcon} className="w-6 h-6 fill-gray-600" />
      </div>
    </button>
  );
};

export default WalletItem;
