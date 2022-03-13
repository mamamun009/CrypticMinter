import Header from '../components/Base/Header';
import profileCoverPlaceholderImage from '../assets/images/profile-cover-placeholder.png';
import Icon from '../components/Utils/Icon';
import truncateText from '../utils/truncateText';

import {
  notificationImage,
  copyIcon,
  editIcon,
  imageIcon,
  profileSharpWebIcon,
  profileTwitterIcon,
  profileDiscordIcon,
  profileInstaIcon,
  checkboxCheck,
  checkIcon,
} from '../assets/icons';
import BasicDisclosure from '../components/Discover/BasicDisclosure';
import StatusFilter from '../components/Discover/StatusFilter';
import { useState } from 'react';
import PriceRangeFilter from '../components/Discover/PriceRangeFilter';
import { crossCircleIcon } from '../assets/icons';
import { useNavigate } from 'react-router';

// data
import currencies from '../data/currencies';
import blockchains from '../data/blockchains';
import statuses from '../data/statuses';

import Tabs from '../components/Profile/Tabs';

import cards from '../data/discoverCards';

const Profile = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
  const [priceRange, setPriceRange] = useState({
    min: '',
    max: '',
  });
  const [selectedBlockchain, setSelectedBlockchain] = useState(
    blockchains[0].id
  );

  const [coverImage, setCoverImage] = useState(profileCoverPlaceholderImage);

  return (
    <div className="relative w-full h-full">
      <Header />

      <div className="w-full">
        <div className="w-full mt-[84px] relative">
          <div className="w-full overflow-hidden max-h-60">
            <img
              src={coverImage}
              alt="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-0 flex justify-center w-full p-4">
            <div className="flex justify-end w-full max-w-sm gap-6 px-4 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
              <button
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium leading-4 rounded bg-blue-light text-gray-50 fill-gray-50"
                onClick={() => navigate('/profile/edit')}
              >
                Edit Profile
                <Icon icon={editIcon} className="w-4 h-4 " />
              </button>
              <button className="relative flex items-center gap-3 px-4 py-3 overflow-hidden text-sm font-medium leading-4 rounded bg-blue-light text-gray-50 fill-gray-50">
                Edit cover photo
                <Icon icon={imageIcon} className="w-4 h-4 " />
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer file:cursor-pointer"
                  onChange={(e) => {
                    // change this to api call to update cover
                    setCoverImage(URL.createObjectURL(e.target.files[0]));
                  }}
                  accept="image/*"
                />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 flex justify-center w-full px-4 translate-y-full">
            <div className="flex justify-end w-full max-w-sm px-4 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
              <button className="flex items-center px-3.5 py-2.5 border text-sm font-medium leading-4 bg-white fill-gray-500/80">
                <Icon icon={profileSharpWebIcon} className="w-7 h-7 " />
              </button>
              <button className="flex items-center px-3.5 py-2.5 border text-sm font-medium leading-4 bg-white fill-gray-500/80">
                <Icon icon={profileTwitterIcon} className="w-6 h-6 " />
              </button>
              <button className="flex items-center px-3.5 py-2.5 border text-sm font-medium leading-4 bg-white fill-gray-500/80">
                <Icon icon={profileDiscordIcon} className="w-6 h-6 " />
              </button>
              <button className="flex items-center px-4.5 py-2.5 border text-sm font-medium leading-4 bg-white fill-gray-500/80">
                <Icon icon={profileInstaIcon} className="w-4 h-4 " />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center -translate-y-16">
          <div className="flex flex-col items-center w-full max-w-sm px-4 text-center md:max-w-lg lg:max-w-4xl xl:max-w-5xl">
            <div className="relative w-32 h-32 border-4 border-gray-300 rounded-full">
              <img
                src={notificationImage}
                alt="profile"
                className="object-cover w-full h-full rounded-full "
              />
              <span className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 border rounded-full -translate-x-1/3 bg-blue-light">
                <Icon icon={checkIcon} className="w-5 h-5 fill-white" />
              </span>
            </div>
            <h3 className="mt-2 text-2xl font-bold leading-8 text-center text-gray-900 font-madeOuterSans">
              Blanca bloc
            </h3>
            <div className="flex items-center justify-center gap-2 mt-1">
              <p className="text-xs leading-4 text-gray-800">
                {truncateText('0xc4c16a645scd43b21a', 11)}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('0xc4c16a645scd43b21a');
                }}
              >
                <Icon icon={copyIcon} className="w-4 h-4 fill-blue-light " />
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-gray-500">
              A wholesome farm owner in Montana. Upcoming gallery solo show in
              Germany We focuses on web & mobile design, helping our clients
              stand out by designing unique interfaces that sell the story of
              your brand.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="relative grid w-full max-w-sm grid-cols-12 gap-8 px-4 mt-10 mb-28 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <div className="col-span-3 ">
            <div className="flex flex-col">
              <section className="">
                <h5 className="text-xs font-bold leading-3 text-gray-900 uppercase">
                  Filter by
                </h5>

                <div className="w-full h-px mt-6 bg-gray-200" />

                <BasicDisclosure className="mt-6" title="Status">
                  <div className="w-full mt-6 bg-white border-2 rounded-lg">
                    <StatusFilter
                      statuses={statuses}
                      selected={selectedStatus}
                      setSelected={setSelectedStatus}
                    />
                  </div>
                </BasicDisclosure>

                <BasicDisclosure className="mt-6" title="Price Range">
                  <div className="w-full mt-6 bg-white border-2 rounded-lg">
                    <PriceRangeFilter
                      currencies={currencies}
                      selectedCurrency={selectedCurrency}
                      setSelectedCurrency={setSelectedCurrency}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                    />
                  </div>
                </BasicDisclosure>

                <BasicDisclosure
                  className="mt-6"
                  title="Blockchain"
                  defaultOpen
                >
                  <div className="absolute flex flex-col w-full gap-1 p-2 mt-2 bg-white border-2 rounded-lg">
                    {blockchains.map((blockchain) => (
                      <button
                        className={`rounded-lg p-2 flex justify-between items-center ${
                          blockchain.id === selectedBlockchain
                            ? 'bg-gray-100'
                            : ''
                        }`}
                        onClick={() => setSelectedBlockchain(blockchain.id)}
                        disabled={blockchain.comingSoon}
                      >
                        {blockchain.title}

                        {blockchain.comingSoon && (
                          <span className="leading-6 text-xxs">
                            Coming soon
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </BasicDisclosure>

                <div className="w-full h-px mt-6 bg-gray-200" />

                <button
                  className="flex items-center gap-2.5 font-bold text-sm leading-4 text-gray-900 fill-gray-900 hover:text-gray-700 hover:fill-gray-700 mt-6.5"
                  onClick={() => {
                    setSelectedStatus('');
                    setSelectedCurrency(currencies[0].id);
                    setPriceRange({
                      min: '',
                      max: '',
                    });
                    setSelectedBlockchain(blockchains[0].id);
                  }}
                >
                  <Icon icon={crossCircleIcon} className="w-5 h-5 " />
                  Reset filter
                </button>
              </section>
            </div>
          </div>

          <div className="col-span-9 ">
            <div className="flex flex-col">
              <Tabs created={cards} owned={cards} liked={[]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
