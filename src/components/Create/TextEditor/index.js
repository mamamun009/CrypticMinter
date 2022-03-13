import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css';
import Toolbar from './Toolbar';
import { lockIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const TextEditor = ({
  error,
  name,
  label,
  placeholder,
  onChange,
  value,
  disabled,
}) => {
  const modules = {
    toolbar: {
      container: '#toolbar',
      handlers: { emoji: function () {} },
    },
    'emoji-toolbar': true,
    'emoji-textarea': false,
    'emoji-shortname': true,
  };

  const formats = ['emoji', 'bold', 'italic', 'underline', 'list', 'bullet'];

  const { quillRef, quill } = useQuill({
    theme: 'snow',
    modules,
    formats,
    placeholder,
    readOnly: disabled,
  });

  useEffect(() => {
    if (quill) {
      if (value) quill.clipboard.dangerouslyPasteHTML(value);
      quill.on('text-change', (delta, oldDelta, source) => {
        onChange?.(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div className="relative flex flex-col ">
      <label
        htmlFor={name}
        className="text-xs font-bold leading-3 text-gray-400 uppercase "
      >
        {label}
      </label>

      <div
        className={`mt-3 border-[0.5px]  border-black/20 text-gray-800 text-sm leading-6 
    bg-gray-100/30 rounded-xl focus:outline-none focus:border-gray-500 focus:ring-0
    ${disabled ? 'text-gray-600 border-black/10' : ''}
    `}
      >
        <div className="mb-2 h-25">
          <div ref={quillRef}></div>
        </div>
        <Toolbar disabled={disabled} />
      </div>

      {disabled ? (
        <div className="absolute bottom-13 right-3.5">
          <Icon icon={lockIcon} className="w-6 h-6 fill-black" />
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

export default TextEditor;
