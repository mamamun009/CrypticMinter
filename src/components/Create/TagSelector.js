import { useState } from 'react';
import { crossIcon } from '../../assets/icons';
import Icon from '../Utils/Icon';

const TagSelector = ({ formik, label, name, placeholder, type = 'text' }) => {
  const [text, setText] = useState('');

  return (
    <div className="relative flex flex-col">
      <label
        htmlFor={name}
        className="text-xs font-bold leading-3 text-gray-400 uppercase "
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            formik.setFieldValue(name, [...formik.values[name], text]);
            setText('');
          }
        }}
        className={`
        mt-3 mb-3 py-3 px-4 border-[0.5px]  border-black/20 text-gray-800 text-sm leading-6 
        bg-gray-100/30 rounded-xl focus:outline-none focus:border-gray-500 focus:ring-0 transition
        ${formik.touched[name] && formik.errors[name] ? '!border-red ' : ''}
          `}
      />
      {formik.values[name].length > 0 ? (
        <div className="absolute flex flex-row-reverse space-x-3 space-x-reverse text-sm origin-top-left -bottom-5">
          {formik.values[name].map((tag, i) => (
            <span
              key={i}
              className="flex items-center px-2 py-0 text-sm font-medium leading-6 text-gray-600 rounded-lg bg-gray-200/70"
            >
              {tag}
              <Icon
                icon={crossIcon}
                className="w-2.5 h-2.5 fill-gray-600 ml-2.5 cursor-pointer hover:fill-gray-700 "
                onClick={() => {
                  formik.setFieldValue(
                    name,
                    formik.values[name].filter((t) => t !== tag)
                  );
                }}
              />
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TagSelector;
