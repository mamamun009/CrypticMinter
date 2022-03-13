import Filters from '../components/Activity/Filters';
import Tabs from '../components/Activity/Tabs';
import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import { useState } from 'react';
import ActivityCard from '../components/Activity/ActivityCard';
import activityData from '../data/activityData';

const Activity = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div className="relative w-full h-full bg-gray-bg">
      <Header />

      <div className="flex justify-center">
        <div className="relative w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <div className="flex items-center justify-between mb-14">
                <h1 className="text-5xl font-medium leading-tight text-gray-900 font-madeOuterSans">
                  Activity
                </h1>
                <div>
                  <button className="px-4 py-3 text-sm font-semibold leading-4 text-gray-900 border-2 rounded-lg">
                    Mark all as read
                  </button>
                </div>
              </div>

              <Tabs selected={selectedTab} setSelected={setSelectedTab} />

              <div className="mt-4 space-y-4">
                {activityData.map((activity) => (
                  <ActivityCard activity={activity} />
                ))}
              </div>
            </div>
            <div className="col-span-5">
              <div className="flex justify-center mt-28 ">
                {filtersForTab[selectedTab].length > 0 && (
                  <Filters
                    filters={filtersForTab[selectedTab]}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Activity;

const filtersForTab = {
  all: [
    {
      id: 1,
      name: 'Escrow',
    },
    {
      id: 2,
      name: 'Sales',
    },
    {
      id: 3,
      name: 'Listings',
    },
    {
      id: 4,
      name: 'Bids',
    },
    {
      id: 5,
      name: 'Messages',
    },
    {
      id: 6,
      name: 'Offers',
    },
    {
      id: 7,
      name: 'Likes',
    },
    {
      id: 8,
      name: 'Transfers',
    },
  ],
  escrow: [
    {
      id: 1,
      name: 'Ongoing Escrows',
    },
    {
      id: 2,
      name: 'Completed',
    },
    {
      id: 3,
      name: 'Cancelled',
    },
  ],
  bids: [
    {
      id: 1,
      name: 'Bids recieved',
    },
    {
      id: 2,
      name: 'Bids made',
    },
  ],
  offers: [
    {
      id: 1,
      name: 'Offers recieved',
    },
    {
      id: 2,
      name: 'Offfers made',
    },
  ],
  history: [],
  likes: [
    {
      id: 1,
      name: 'Sold',
    },
    {
      id: 2,
      name: 'Purchased',
    },
  ],
};
