import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const NotificationItem = ({ notification }) => {
  return (
    <div className="w-full flex items-center justify-between cursor-pointer ">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <img
            src={notification.image}
            alt="notification"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col ml-3">
          <p className="text-sm font-medium  ">
            {notification.title}{' '}
            {notification.subtitle && (
              <span className="opacity-70 font-poppins">
                {notification.subtitle}
              </span>
            )}
          </p>
          <span className="text-xxs opacity-80">
            {timeAgo(notification.time)}
          </span>
        </div>{' '}
      </div>
      <div
        className={`
        w-2.5 h-2.5 rounded-full  ${
          notification.color === 'red'
            ? 'bg-red'
            : notification.color === 'yellow'
            ? 'bg-yellow'
            : 'bg-blue-light'
        }
      `}
      />
    </div>
  );
};

export default NotificationItem;

//change date into time ago
const timeAgo = (date) => {
  const time = dayjs(date).fromNow();
  return time === 'a few seconds ago' ? 'Just now' : time;
};
