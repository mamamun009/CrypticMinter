import {
  boldIcon,
  emojiIcon,
  italicIcon,
  listIcon,
  numListIcon,
} from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const Toolbar = ({ disabled }) => (
  <div id="toolbar" className="relative">
    {disabled && <div className="absolute inset-0 bg-gray-100/30" />}
    <span className=" ql-formats">
      <button className="ql-emoji" disabled={disabled}>
        <Icon
          icon={emojiIcon}
          className="w-6 h-6 fill-gray-600 hover:fill-gray-700"
        />
      </button>
      <button className="ql-bold" disabled={disabled}>
        <Icon
          icon={boldIcon}
          className="w-6 h-6 stroke-gray-500 hover:stoke-gray-700"
        />
      </button>
      <button className="ql-italic" disabled={disabled}>
        <Icon
          icon={italicIcon}
          className="w-6 h-6 stroke-gray-500 hover:stoke-gray-700"
        />
      </button>
      <button className="ql-list" value="ordered" disabled={disabled}>
        <Icon
          icon={numListIcon}
          className="w-6 h-6 stroke-gray-500 hover:stoke-gray-700"
        />
      </button>
      <button className="ql-list" value="bullet" disabled={disabled}>
        <Icon
          icon={listIcon}
          className="w-6 h-6 stroke-gray-500 hover:stoke-gray-700"
        />
      </button>
    </span>
  </div>
);

export default Toolbar;
