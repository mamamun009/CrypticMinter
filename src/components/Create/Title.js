import { lockIcon } from '../../assets/icons';
import Icon from '../Utils/Icon';

const Title = ({ number, title, subtitle, locked }) => {
  return (
    <div className="mt-16 ">
      <div className="flex">
        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-semibold text-white bg-gray-800 rounded-full">
          {number}
        </span>
        <div className="ml-4 lg:max-w-xl">
          <div className="flex items-center">
            <h2 className="text-xl leading-6 font-madeOuterSans">{title}</h2>
            {locked && (
              <Icon icon={lockIcon} className="w-5 h-5 ml-4.5 fill-black" />
            )}
          </div>
          {subtitle && <p className="text-sm  ">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Title;
