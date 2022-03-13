import { plusIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const CreateCollection = () => {
  return (
    <button className="flex flex-col justify-between flex-shrink-0 w-40 p-5 text-left transition bg-gray-100 border-2 border-gray-400 border-dashed group hover:shadow-md hover:border-gray-500 snap-start rounded-2xl">
      <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition rounded-full group-hover:shadow-md bg-blue-dark ">
        <Icon icon={plusIcon} className="w-3 h-3 fill-white" />
      </span>
      <span className="mt-6 text-sm font-medium leading-4 font-madeOuterSans text-blue-dark">
        Create collection
      </span>
    </button>
  );
};

export default CreateCollection;
