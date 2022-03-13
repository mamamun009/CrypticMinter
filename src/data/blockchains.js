import { ethPlain, maticBlack } from '../assets/icons';
import Icon from '../components/Utils/Icon';

const blockchains = [
  {
    id: 1,
    title: (
      <span className="flex items-center gap-2.5  text-gray-500 text-sm leading-[14px]">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
          <Icon icon={maticBlack} className="w-6 h-5.5 fill-primary" />
        </span>
        Polygon
      </span>
    ),
  },
  {
    id: 2,
    title: (
      <span className="flex items-center gap-2.5  text-gray-500 text-sm leading-[14px]">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
          <Icon icon={ethPlain} className="w-4 h-6.5" />
        </span>
        Ethereum
      </span>
    ),
    comingSoon: true,
  },
];

export default blockchains;
