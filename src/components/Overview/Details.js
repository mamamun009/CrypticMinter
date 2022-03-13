import { useState } from 'react';
import Icon from '../Utils/Icon';
import {
  cubeIcon,
  heartIcon,
  badgeIcon,
  notificationImage,
} from '../../assets/icons';
import placeholderImage from '../../assets/images/placeholder.png';
import Tabs from '../Overview/Tabs';
import ShareMenu from '../Overview/ShareMenu';
import { Tooltip } from 'react-tippy';
import { useNavigate } from 'react-router-dom';
import MoreMenu from './MoreMenu';
import PlaceBidModal from '../Modals/PlaceBidModal';
import OwnDunkModal from '../Modals/OwnDunkModal';
import MakeOfferModal from '../Modals/MakeOfferModal';

const highestBid = {
  image: notificationImage,
  name: 'Kyle Reese',
  verified: true,
  offer: 365,
  dollar: 645,
};

const Details = ({ review, sold, purchase, bid }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isListed, setIsListed] = useState(false);
  const listingTime = '8h 1m';

  // modals state
  const [placeBidModalOpen, setPlaceBidModalOpen] = useState(false);
  const [ownDunkModalOpen, setOwnDunkModalOpen] = useState(false);
  const [makeOfferModalOpen, setMakeOfferModalOpen] = useState(false);

  return (
    <section className="flex justify-center flex-1">
      <div className="flex flex-col w-full max-w-sm px-4 py-6 lg:flex-row md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <div className="flex flex-col w-full border rounded-md h-fit lg:w-7/12">
          <div className="flex flex-row-reverse gap-2 px-4 py-2 bg-white rounded-t-md">
            {/* options */}
            <MoreMenu />
            <button
              className={`flex items-center justify-center  transition-all duration-300 bg-gray-100 rounded-full hover:shadow-sm p-2 
              ${isLiked ? 'fill-pink' : 'fill-gray-500 hover:fill-gray-600'}
            `}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Icon icon={heartIcon} className="w-5 h-5 " />
              {isLiked && (
                <span className="ml-1 text-xs font-semibold leading-5 ">
                  27
                </span>
              )}
            </button>
            <ShareMenu />
          </div>
          <div className="flex-1">
            <div className="w-full h-full max-h-[800px] overflow-hidden rounded-b-md">
              {/* image */}
              <img
                src={placeholderImage}
                alt="item"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full pl-0 md:pl-8 xl:pl-24 lg:w-5/12 ">
          {/* title */}
          <h1 className="font-madeOuterSans font-bold text-4xl leading-[48px] text-gray-900">
            CryptoMagz
          </h1>
          <div
            className={`flex items-center gap-6 mt-4  font-madeOuterSans
            ${isListed || bid ? 'mb-2' : 'mb-12'}
          `}
          >
            {/* info */}
            <span className="p-1 text-sm font-bold leading-4 border rounded border-green text-green ">
              250 MATIC
            </span>

            <span className="text-sm font-bold leading-4 text-gray-500 ">
              $522.37
            </span>
            <span className="py-0.5 pl-3 text-xs leading-4 border-l border-black/40 text-blue-light">
              10% royality
            </span>

            <Tooltip
              position="bottom"
              html={
                <div className="relative text-center rounded-md w-52 bg-tooltip text-white p-2.5 mt-2 ">
                  <h6 className="font-bold text-xs leading-[18px]">NFT Only</h6>
                  <p className="text-xs leading-[18px]">
                    This item does not come with a physical pair.
                  </p>
                  <span className="absolute w-0 h-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 -top-2 left-1/2 border-l-transparent border-r-transparent border-b-tooltip " />
                </div>
              }
            >
              <Icon
                icon={cubeIcon}
                className="w-4 h-5 fill-black"
                data-tip
                data-for="only-nft"
              />
            </Tooltip>
          </div>

          {!review && (
            <div>
              {(isListed || bid) && (
                <div>
                  <div className="pb-4 leading-4 font-madeOuterSans text-red text-xxs">
                    ⏳ {listingTime} Left
                  </div>

                  <div className="flex items-center mb-5">
                    <div className="flex -space-x-5 ">
                      <div className="relative ">
                        <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full">
                          <img
                            src={highestBid.image}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {highestBid.verified && (
                          <Icon
                            icon={badgeIcon}
                            className="absolute bottom-0 right-1.5"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center pl-4">
                      <div className="text-gray-900 ">
                        <h5 className="text-sm leading-4 ">
                          <span className="mr-1 font-normal ">
                            Highest Bid by
                          </span>
                          <span className="font-medium font-madeOuterSans">
                            {highestBid.name || highestBid.id}
                          </span>
                        </h5>
                        <span className="text-sm font-bold leading-4 text-black ">
                          {highestBid.offer} MATIC, ${highestBid.dollar}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {sold ? (
                <button
                  className="box-border w-full p-4 mb-4 font-medium leading-none text-black transition bg-white rounded-md font-madeOuterSans disabled:text-white disabled:bg-gray-400 disabled:opacity-50"
                  disabled={true}
                >
                  Sold
                </button>
              ) : purchase ? (
                <div className="flex gap-2 mb-5">
                  <button
                    className="box-border flex-1 w-full p-4 font-medium leading-none text-black transition bg-white border-2 border-gray-300 rounded-md font-madeOuterSans disabled:bg-gray-300 disabled:opacity-75"
                    onClick={() => {
                      setOwnDunkModalOpen(true);
                    }}
                  >
                    Purchase Now
                  </button>
                  <button
                    className="flex-1 p-4 font-medium leading-none text-white rounded-md bg-blue-light font-madeOuterSans"
                    onClick={() => {
                      setMakeOfferModalOpen(true);
                    }}
                  >
                    Make Offer
                  </button>
                </div>
              ) : bid ? (
                <button
                  className="box-border w-full p-4 mb-4 font-medium leading-4 text-white transition rounded-md bg-blue-light font-madeOuterSans "
                  onClick={() => {
                    setPlaceBidModalOpen(true);
                  }}
                >
                  Place a bid
                </button>
              ) : (
                <div className="flex gap-2 mb-5">
                  <div className="flex-1">
                    <Tooltip
                      disabled={!isListed}
                      position="top"
                      html={
                        <div className="relative text-center rounded-md w-40  bg-tooltip text-white p-2.5 mb-8 ">
                          <p className="text-xs leading-[18px]">
                            Unlist your item first to make changes
                          </p>
                          <span className="absolute w-0 h-0 -translate-x-1/2 border-t-8 border-l-8 border-r-8 -bottom-2 left-1/2 border-l-transparent border-r-transparent border-t-tooltip " />
                        </div>
                      }
                    >
                      <button
                        className="box-border w-full p-4 font-medium leading-none text-black transition bg-white border-2 border-gray-300 rounded-md font-madeOuterSans disabled:bg-gray-300 disabled:opacity-75"
                        onClick={() => {
                          navigate('/edit-single');
                        }}
                        disabled={isListed}
                      >
                        Edit
                      </button>
                    </Tooltip>
                  </div>

                  {isListed ? (
                    <button className="flex-1 p-4 font-medium leading-none text-white rounded-md bg-red font-madeOuterSans">
                      Cancel Listing
                    </button>
                  ) : (
                    <button
                      className="flex-1 p-4 font-medium leading-none text-white rounded-md bg-blue-light font-madeOuterSans"
                      onClick={() => {
                        navigate('/for-sale');
                      }}
                    >
                      Sell
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
          {/* details tabs */}
          <div className="">
            <Tabs review={review} />
          </div>
        </div>
      </div>

      <PlaceBidModal
        isOpen={placeBidModalOpen}
        onClose={() => setPlaceBidModalOpen(false)}
        ownMatics={300}
        reservedPrice={250}
      />
      <OwnDunkModal
        isOpen={ownDunkModalOpen}
        onClose={() => setOwnDunkModalOpen(false)}
        dunk={{
          image: placeholderImage,
          title: 'The amazing art',
          owner: {
            id: 1,
            name: 'Selina Mayert',
          },
          royalty: 10,
          price: 321,
          dollars: 567.9,
        }}
        ownMatics={300}
      />
      <MakeOfferModal
        isOpen={makeOfferModalOpen}
        onClose={() => setMakeOfferModalOpen(false)}
        ownMatics={300}
      />
    </section>
  );
};

export default Details;
