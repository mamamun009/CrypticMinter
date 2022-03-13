const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="flex items-center justify-between w-full p-1 border rounded bg-gray-bg">
      <button
        className={`px-3 py-1.5 rounded-md font-madeOuterSans font-medium text-sm leading-4 transition
        ${
          selected === 'all'
            ? 'bg-gray-tab text-white'
            : 'bg-gray-bg text-gray-600/80'
        }
      `}
        onClick={() => setSelected('all')}
      >
        All
      </button>
      <button
        className={`px-3 py-1.5 rounded-md font-madeOuterSans font-medium text-sm leading-4 transition
        ${
          selected === 'escrow'
            ? 'bg-gray-tab text-white'
            : 'bg-gray-bg text-gray-600/80'
        }
      `}
        onClick={() => setSelected('escrow')}
      >
        Escrow
      </button>
      <button
        className={`px-3 py-1.5 rounded-md font-madeOuterSans font-medium text-sm leading-4 transition
        ${
          selected === 'bids'
            ? 'bg-gray-tab text-white'
            : 'bg-gray-bg text-gray-600/80'
        }
      `}
        onClick={() => setSelected('bids')}
      >
        Bids
      </button>
      <button
        className={`px-3 py-1.5 rounded-md font-madeOuterSans font-medium text-sm leading-4 transition
        ${
          selected === 'offers'
            ? 'bg-gray-tab text-white'
            : 'bg-gray-bg text-gray-600/80'
        }
      `}
        onClick={() => setSelected('offers')}
      >
        Offers
      </button>
      <button
        className={`px-3 py-1.5 rounded-md font-madeOuterSans font-medium text-sm leading-4 transition
        ${
          selected === 'history'
            ? 'bg-gray-tab text-white'
            : 'bg-gray-bg text-gray-600/80'
        }
      `}
        onClick={() => setSelected('history')}
      >
        Trading History
      </button>
      <button
        className={`px-3 py-1.5 rounded-md font-madeOuterSans font-medium text-sm leading-4
        ${
          selected === 'likes'
            ? 'bg-gray-tab text-white'
            : 'bg-gray-bg text-gray-600/80'
        }
      `}
        onClick={() => setSelected('likes')}
      >
        Likes
      </button>
    </div>
  );
};

export default Tabs;
