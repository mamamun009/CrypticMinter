/**
 * Types
    transfer
    cancelled
    dispute
    minted
    listed
    escrow
    sold
    bid-made
    bid-recieved
    offer-made
    offer-recieved
    likes
    purchased
 */

import dayjs from 'dayjs';

const activityData = [
  {
    id: 1,
    title: 'A freakin parrot',
    type: 'purchased',
    time: dayjs().subtract(2, 'days').toDate(),
    from: {
      id: '0xcb827f577asd32cc30a',
    },
    price: 0.5,
  },
  {
    id: 2,
    title: 'A freakin parrot',
    type: 'dispute',
    time: dayjs().subtract(5, 'hours').toDate(),
    from: {
      id: '0xcb827f577asd32cc30a',
    },
  },
  {
    id: 3,
    title: 'A freakin parrot',
    type: 'bid-made',
    time: dayjs().subtract(8, 'hours').toDate(),
    price: 1,
  },
  {
    id: 4,
    title: 'A freakin parrot',
    type: 'escrow',
    time: dayjs().subtract(10, 'hours').toDate(),
    from: {
      id: '0xcb827f577asd32cc30a',
    },
    to: {
      id: '0xcb827f577asd32cc30a',
    },
  },
  {
    id: 5,
    title: 'A freakin parrot',
    type: 'offer-recieved',
    time: dayjs().subtract(12, 'hours').toDate(),
    from: {
      id: '0xcb827f577asd32cc30a',
    },
    price: 0.8,
  },
  {
    id: 6,
    title: 'A freakin parrot',
    type: 'listed',
    price: 0.5,
  },
  {
    id: 7,
    title: 'A freakin parrot',
    type: 'minted',
    time: dayjs().subtract(15, 'hours').toDate(),
    code: 'ERC-721',
  },
];

export default activityData;
