import { lockIcon } from '../../assets/icons';
import Icon from '../Utils/Icon';

const TextField = ({
  value,
  onChange,
  onBlur,
  error,
  label,
  name,
  placeholder,
  type = 'text',
  disabled,
  lock,
  icon,
  ...props
}) => {
  return (
    <div className="relative flex flex-col ">
      {label && (
        <label
          htmlFor={name}
          className="text-xs font-bold leading-3 text-gray-400/80  uppercase  mb-1.5"
        >
          {label}
        </label>
      )}

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        {...props}
        className={`
        mt-1.5 py-3 px-4 border-[0.5px]  border-black/20 text-gray-800 text-sm leading-6 
        bg-gray-100/30 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-0 transition 
        ${error ? '!border-red ' : ''}
        ${disabled ? 'text-gray-600 border-black/10' : ''}
          `}
      />
      {disabled && lock ? (
        <div className="absolute bottom-3.5 right-3.5">
          <Icon icon={lockIcon} className="w-6 h-6 fill-black" />
        </div>
      ) : null}

      {!lock && icon ? (
        <div className="absolute bottom-3.5 right-3.5">
          <Icon icon={icon} className="w-5 h-5 fill-gray-700" />
        </div>
      ) : null}

      {error ? (
        <div className="absolute mt-1 text-sm origin-bottom-left -bottom-6 text-red">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default TextField;
