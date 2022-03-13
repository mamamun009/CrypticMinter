import dayjs from 'dayjs';
import { messageCheckIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';
import { forwardRef } from 'react';

const Message = forwardRef(
  ({ self, moderator, delivered, text, time }, ref) => {
    return (
      <div
        className={`flex flex-col  justify-center  max-w-[40%]
    ${self ? 'items-end self-end' : 'items-start self-start'}`}
        ref={ref}
      >
        <div
          className={`  rounded-md py-2 px-3.5 shadow-sm text-sm leading-5
        ${
          self
            ? ' bg-[#47A5EA] text-white rounded-tr-none'
            : moderator
            ? 'bg-[#707070] text-white rounded-tl-none'
            : 'bg-[#F8F8F8] border-[0.5px] border-gray-100 text-gray-900 rounded-tl-none'
        }
       `}
        >
          {text}
        </div>
        <div className="flex items-center gap-2 px-1 mt-1">
          {self && (
            <Icon
              icon={messageCheckIcon}
              className={
                delivered
                  ? 'fill-green stroke-green'
                  : 'fill-gray-600 stroke-gray-600'
              }
            />
          )}
          <span className="text-[9px] leading-[11px] text-gray-500">
            {dayjs(time).format('h:mm a')}
          </span>
          {moderator && (
            <span className="text-[9px] leading-[11px] text-gray-500 font-semibold ">
              Moderator
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default Message;
