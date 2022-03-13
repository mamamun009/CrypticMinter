import { notificationImage } from '../assets/icons';
import dayjs from 'dayjs';

const notifications = [
  {
    id: 1,
    image: notificationImage,
    title: 'New Bid',
    subtitle: '0.1 ETH',
    time: dayjs().subtract(10, 'seconds').toDate(),
    color: 'blue',
  },
  {
    id: 2,
    image: notificationImage,
    title: 'Sold For',
    subtitle: '2 ETH',
    time: dayjs().subtract(2, 'minute').toDate(),
    color: 'yellow',
  },
];

export default notifications;
