const SelectField = ({
  value,
  onChange,
  onBlur,
  error,
  label,
  name,
  placeholder,
  options,
  ...props
}) => {
  return (
    <div className="relative flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="text-xs font-bold leading-3 text-gray-400/80  uppercase  mb-1.5"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        className={`
      mt-1.5 py-3 px-4 border-[0.5px]  border-black/20 text-gray-800 text-sm leading-6 
      bg-gray-100/30 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-0 transition
      ${error ? '!border-red ' : ''}
        `}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
