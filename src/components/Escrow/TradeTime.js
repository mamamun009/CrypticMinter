import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

const TradeTime = () => {
  const [time, setTime] = useState(dayjs().add(1, 'day').toDate());
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        `${dayjs(time).diff(dayjs(), 'day')}d ${
          dayjs(time).diff(dayjs(), 'hour') % 24
        }h ${dayjs(time).diff(dayjs(), 'minute') % 60}m ${
          dayjs(time).diff(dayjs(), 'second') % 60
        }s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="w-full mt-6 rounded-md shadow-lg shadow-gray-600/10 p-0.5">
      <div className="flex justify-between items-center p-3.5 border-b">
        <h2 className="text-2xl font-bold font-madeOuterSans">Trade Time</h2>
        <span
          className={`
          font-madeOuterSans font-medium text-xl leading-[25px] border rounded-[10px] p-2
            ${
              // border green, if less than 1 day then blue, if less than 30 mins red
              dayjs(time).diff(dayjs(), 'day') < 1
                ? dayjs(time).diff(dayjs(), 'hour') % 24 >= 1
                  ? 'border-blue-light '
                  : 'border-red '
                : 'border-green '
            }
            ${
              // text black but red if time left is less than 10 mins
              dayjs(time).diff(dayjs(), 'minute') % 60 < 10
                ? 'text-red '
                : 'text-black '
            }
        `}
        >
          ⏳ {timeLeft}
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm leading-[30px] text-center">
          Order will cancel automatically if product is not shipped{' '}
          <span className="font-black"> within 2 days</span>
        </p>
      </div>
    </div>
  );
};

export default TradeTime;
