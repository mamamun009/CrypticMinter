import { ethPlain, maticBlack, usdtIcon } from '../assets/icons';
import Icon from '../components/Utils/Icon';

const currencies = [
  {
    id: 1,
    title: (
      <span className="flex items-center gap-2.5  text-gray-500 text-sm leading-[14px]">
        <span>
          <Icon icon={usdtIcon} />
        </span>
        Dollar (USDT)
      </span>
    ),
  },
  {
    id: 2,
    title: (
      <span className="flex items-center gap-2.5  text-gray-500 text-sm leading-[14px]">
        <span className="w-[17px] h-[17px] bg-gray-50 rounded-full flex justify-center items-center">
          <Icon icon={maticBlack} className="w-3 h-2.5 fill-primary" />
        </span>
        Polygon (MATIC)
      </span>
    ),
  },
  {
    id: 3,
    title: (
      <span className="flex items-center gap-2.5  text-gray-500 text-sm leading-[14px]">
        <span className="w-[17px] h-[17px] bg-gray-50 rounded-full flex justify-center items-center">
          <Icon icon={ethPlain} className="w-2 h-3.5" />
        </span>
        Ethereum (ETH)
      </span>
    ),
  },
];

export default currencies;
