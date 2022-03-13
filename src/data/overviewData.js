import placeholderImage from '../assets/images/placeholder.png';
import { notificationImage } from '../assets/icons';

const overviewData1 = {
  image: placeholderImage,
  title: 'CryptoMagz',
  matic: 250,
  price: 522.37,
  royalty: 10,
  creator: {
    name: 'Selina Mayert',
    image: notificationImage,
    verified: true,
  },
  description:
    'The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.',
  tags: ['Nike', 'Air max 97', 'Shoes'],
  extras: ['unlockable'],
  properties: [
    {
      type: 'brand',
      value: 'Nike',
    },
    {
      type: 'model',
      value: 'AIR FORCE 1',
    },
    {
      type: 'size',
      value: 'US 10.5',
    },
    {
      type: 'ATOMIC NUMBER',
      value: 85,
    },
  ],
};

export default overviewData1;
