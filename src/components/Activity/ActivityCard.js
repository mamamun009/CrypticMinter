import dayjs from 'dayjs';
import {
  activityTransferIcon,
  notificationImage,
  activityCancelledIcon,
  activityDisputeIcon,
  activityEscrowIcon,
  activityLikesIcon,
  activityListedIcon,
  activityMadeIcon,
  activityMintedIcon,
  activityPurchasedIcon,
  activityRecievedIcon,
  activitySalesIcon,
  badgeIcon,
  chevronDownIcon,
} from '../../assets/icons';
import truncateText from '../../utils/truncateText';
import Icon from '../Utils/Icon';

const ActivityCard = ({ activity }) => {
  return (
    <div className="p-4 pt-6.5 bg-white rounded-xl w-full flex gap-6 hover:bg-gray-100 transition cursor-pointer">
      <div className="relative">
        {/* image */}
        <div className="w-24 h-24 overflow-hidden rounded-2xl">
          <img
            src={notificationImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* icon */}
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3">
          <Icon icon={putIcon(activity)} />
        </div>
      </div>

      <div className="flex items-center justify-between flex-1">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            A freakin parrot
          </h3>
          <p className="text-sm leading-6">{writeDescription(activity)}</p>
          <p className="text-xs font-semibold leading-4 text-gray-500">
            {dayjs(activity.time).fromNow()}
          </p>
        </div>
        <div>
          {activity.type === 'purchased' ? (
            <Icon
              icon={chevronDownIcon}
              className="w-6 h-6 -rotate-90 fill-gray-600"
            />
          ) : (
            <div className="w-3 h-3 rounded-full bg-blue-light " />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

const writeDescription = (activity) => {
  if (activity.type === 'transfer') {
    return (
      <>
        Transferred to{' '}
        <span className="font-semibold">
          {truncateText(activity.to.id, 11)}
        </span>
      </>
    );
  }
  if (activity.type === 'cancelled') {
    return (
      <>
        Escrow canceled by{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>
      </>
    );
  }
  if (activity.type === 'dispute') {
    return (
      <>
        Escrow canceled by{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>
      </>
    );
  }
  if (activity.type === 'minted') {
    return (
      <>
        Minted <span className="font-semibold">{activity.code}</span>
        {activity.quantity ? ' - ' + activity.quantity : ''}
      </>
    );
  }
  if (activity.type === 'listed') {
    return (
      <>
        Listed for <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'escrow') {
    return (
      <>
        Escrow initiated by{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>{' '}
        for <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'sold') {
    return (
      <>
        Sold to{' '}
        <span className="font-semibold">
          {truncateText(activity.to.id, 11)}
        </span>{' '}
        for <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'bid-made') {
    return (
      <>
        Bid places for{' '}
        <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'bid-recieved') {
    return (
      <>
        Bid recieved from{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>{' '}
        for <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'offer-made') {
    return (
      <>
        Offer made to{' '}
        <span className="font-semibold">
          {truncateText(activity.to.id, 11)}
        </span>{' '}
        for
        <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'offer-recieved') {
    return (
      <>
        Offer recieved by{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>{' '}
        for <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
  if (activity.type === 'likes') {
    if (!activity.from) {
      return 'Liked';
    }

    if (activity.from.name && activity.from.verified) {
      return (
        <>
          Liked by <span className="font-semibold">{activity.from.name}</span>{' '}
          <Icon icon={badgeIcon} />
        </>
      );
    }

    return (
      <>
        Likes by{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>
      </>
    );
  }
  if (activity.type === 'purchased') {
    return (
      <>
        Purchased from{' '}
        <span className="font-semibold">
          {truncateText(activity.from.id, 11)}
        </span>{' '}
        for <span className="font-semibold">{activity.price} ETH</span>
      </>
    );
  }
};

const putIcon = (activity) => {
  if (activity.type === 'transfer') {
    return activityTransferIcon;
  }
  if (activity.type === 'cancelled') {
    return activityCancelledIcon;
  }
  if (activity.type === 'dispute') {
    return activityDisputeIcon;
  }
  if (activity.type === 'minted') {
    return activityMintedIcon;
  }
  if (activity.type === 'listed') {
    return activityListedIcon;
  }
  if (activity.type === 'escrow') {
    return activityEscrowIcon;
  }
  if (activity.type === 'sold') {
    return activitySalesIcon;
  }
  if (activity.type === 'bid-made') {
    return activityMadeIcon;
  }
  if (activity.type === 'bid-recieved') {
    return activityRecievedIcon;
  }
  if (activity.type === 'offer-made') {
    return activityMadeIcon;
  }
  if (activity.type === 'offer-recieved') {
    return activityRecievedIcon;
  }
  if (activity.type === 'likes') {
    return activityLikesIcon;
  }
  if (activity.type === 'purchased') {
    return activityPurchasedIcon;
  }
};
