import { useEffect } from 'react';
import Icon from '../../Utils/Icon';
import { loaderIcon } from '../../../assets/icons';

const Convert = ({ loading, setLoading }) => {
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [setLoading]);

  if (loading)
    return (
      <div className="flex items-center justify-center w-full p-28 ">
        <Icon
          icon={loaderIcon}
          className="animate-spin-loader fill-gray-600  w-[50px] h-[50px]"
        />
      </div>
    );

  return (
    <div className="-mx-4">
      <p className="text-center mt-1.5">
        Easily convert between MATIC & WMATIC
      </p>
      <iframe
        src={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=PKR`}
        title="convert"
        className="w-full mt-8 border rounded-lg border-black/20 h-96 "
      />
    </div>
  );
};

export default Convert;
