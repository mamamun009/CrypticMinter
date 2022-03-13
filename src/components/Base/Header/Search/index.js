import { searchIcon } from '../../../../assets/icons';
import Icon from '../../../Utils/Icon';
import DropDown from './DropDown';
import useOutsideAlert from '../../../../hooks/useOutsideAlert';
import './index.css'
const Search = () => {
  const { visible, setVisible, ref } = useOutsideAlert(false);

  return (
    <div className="relative flex items-center w-96" ref={ref}>
      <input
        type="text"
        className={`w-full h-10 rounded-lg  bg-white border border-gray-300 p-2.5 pl-11 font-poppins text-xs leading-5 focus:ring-0 focus:border-gray-300 transition-colors ${
          visible ? 'rounded-b-none' : ''
        }`}
        placeholder="Search"
        onFocus={() => setVisible(true)}
      />
      <Icon icon={searchIcon} className="absolute left-4 top-3" />

      {visible && (
        <div className="absolute w-full origin-top top-10 ">
          <DropDown />
        </div>
      )}
    </div>
  );
};

export default Search;
