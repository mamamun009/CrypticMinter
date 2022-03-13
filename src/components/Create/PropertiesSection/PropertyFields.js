import TextField from '../TextField';
import Icon from '../../Utils/Icon';
import { crossIcon } from '../../../assets/icons';

const PropertyFields = ({
  type,
  value,
  onTypeChange,
  onValueChange,
  onTypeBlur,
  onValueBlur,
  onRemove,
  disabled,
}) => {
  return (
    <div className="relative flex items-center justify-between w-full space-x-2 md:space-x-6 lg:space-x-12 xl:space-x-18 ">
      <div className="flex-1 w-32 sm:40 md:w-full">
        <TextField
          label="Type"
          name="type"
          placeholder="Brand"
          value={type}
          onChange={onTypeChange}
          onBlur={onTypeBlur}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onTypeBlur(e);
            }
          }}
          disabled={disabled}
        />
      </div>
      <div className="flex-1 w-32 sm:40 md:w-full">
        <TextField
          label="Value"
          name="value"
          placeholder="Nike"
          value={value}
          onChange={onValueChange}
          onBlur={onValueBlur}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onValueBlur(e);
            }
          }}
          disabled={disabled}
        />
      </div>
      {onRemove && !disabled && (
        <button
          className="absolute mt-5 transition -right-12 fill-gray-500 hover:fill-gray-600"
          onClick={onRemove}
        >
          <Icon icon={crossIcon} className="w-5.5 h-5.5 " />
        </button>
      )}
    </div>
  );
};

export default PropertyFields;
