import { maticBlack, heartIcon, maticMIcon } from '../../../assets/icons';
import Icon from '../../Utils/Icon';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const Card = ({ item, button }) => {
  const {
    id,
    price,
    likes,
    image,
    creator,
    title,
    endTime,
    info,
    onBid,
    onSale,
  } = item;

  const navigate = useNavigate();

  return (
    <div
      className={`w-full max-w-[340px] rounded-lg px-3.5 py-2 border border-gray-100 shadow transition ${
        button ? 'cursor-pointer hover:shadow-lg' : ''
      } `}
      onClick={() => {
        if (button) {
          navigate(`/view-item/${id}?onBid=${onBid}&onSale=${onSale}`);
        }
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon icon={maticBlack} className="w-4 h-3.5 fill-primary" />
          <span className="ml-1 font-medium leading-5">{price}</span>
        </div>
        <div
          className={`flex items-center justify-center  transition bg-gray-100 rounded-full hover:shadow-sm p-2 
              ${likes > 0 ? 'fill-pink' : 'fill-gray-500 hover:fill-gray-600'}
            `}
        >
          <Icon icon={heartIcon} className="w-5 h-5 " />
          {likes > 0 && (
            <span className="ml-1 text-xs font-semibold leading-5 ">27</span>
          )}
        </div>
      </div>
      <div className="mt-1 overflow-hidden rounded-md aspect-square">
        <img src={image} alt="item" className="object-cover w-full h-full" />
      </div>
      <div className="mt-2.5">
        <h6 className="text-xs font-light leading-5 text-black/60">
          {creator}
        </h6>
        <h4 className="font-medium leading-5 text-gray-900 font-madeOuterSans">
          {title}
        </h4>
      </div>
      <div className="flex items-center justify-between mt-8 text-sm leading-4 ">
        <span>
          {endTime && (
            <>
              ⏳{' '}
              <span className="text-black/50 ">
                {dayjs(endTime).fromNow(true)} left
              </span>
            </>
          )}
        </span>
        <span className="flex items-center gap-1.5 text-gray-500">
          {info && info.label && (
            <>
              {info.label} <Icon icon={maticMIcon} className="w-4 h-3" />{' '}
              {info.value}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;
