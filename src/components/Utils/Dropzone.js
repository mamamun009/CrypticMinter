import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { infoIcon, shoeIcon } from '../../assets/icons';
import Icon from './Icon';

const Dropzone = ({
  value,
  setValue,
  setError,
  maxFiles = 1,
  maxSize = 10 * 1024 * 1024,
  accept = 'image/*',
  info,
}) => {
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (maxFiles === 1) {
        setValue(acceptedFiles[0]);
      } else {
        setValue(acceptedFiles);
      }
    },
    [setValue, maxFiles]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    maxFiles,
    maxSize,
    accept,
    onDrop,
  });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setError?.(fileRejections[0].errors[0].message);
    }
  }, [fileRejections, setError]);

  return (
    <section className="grid grid-cols-12 mt-4 gap-x-8 lg:gap-x-4 gap-y-4 ">
      <div className="col-span-12 lg:col-span-9 ">
        <div
          {...getRootProps({
            className: `px-10 py-10 md:py-16 lg:py-24 border border-dashed bg-gray-100/30 rounded-xl border-black/30 w-full flex justify-center items-center transition
              ${isDragActive ? 'border-green bg-green/20' : ''}
              ${isDragAccept ? 'border-green bg-green/20' : ''}
              ${isDragReject ? 'border-red  bg-red/20' : ''}
              `,
          })}
        >
          <input {...getInputProps()} />
          <div className="max-w-[184px] flex justify-center flex-col items-center">
            <Icon icon={shoeIcon} />
            <p className="text-sm text-center text-gray-500 ">
              Drag & Drop Your File Or Browse the Media on your device
            </p>
          </div>
        </div>
      </div>
      <aside className="flex flex-row col-span-12 gap-4 lg:col-span-3 lg:flex-col">
        {info && (
          <div className="flex w-full sm:w-5/12 lg:w-full">
            <Icon icon={infoIcon} className="w-6 h-6 fill-yellow" />
            <p className="pl-3 text-sm text-gray-500/80 ">{info}</p>
          </div>
        )}
        <div className="w-full ml-10 lg:ml-0 lg:mt-10 sm:w-7/12 lg:w-full">
          {maxFiles === 1 && value && (
            <div className="text-gray-500 ">
              <h6 className="text-sm font-medium">Upload:</h6>
              <p className="mt-1 text-xs">{value.path}</p>
            </div>
          )}
          {maxFiles > 1 && value?.length > 0 && (
            <div className="text-gray-500 ">
              <h6 className="text-sm font-medium">Uploads:</h6>
              {value.map((file, index) => (
                <p className="mt-1 ml-10 text-xs list-item" key={index}>
                  {file.path}
                </p>
              ))}
            </div>
          )}
        </div>
      </aside>
    </section>
  );
};

export default Dropzone;
