import { loaderIcon } from '../../assets/icons';
import Icon from '../Utils/Icon';

const Loader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center top-9 bg-black/50">
      <Icon
        icon={loaderIcon}
        className="animate-spin-loader fill-white  w-[50px] h-[50px]"
      />
    </div>
  );
};

export default Loader;
