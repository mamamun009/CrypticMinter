import { useState } from 'react';
// import overviewData1 from '../data/overviewData';
import MintedModal from '../components/Overview/MintedModal';
import { useNavigate } from 'react-router-dom';
import Details from '../components/Overview/Details';

const Overview = () => {
  const navigate = useNavigate();
  const [minted, setMinted] = useState(false);

  return (
    <div className="relative flex flex-col w-full h-full">
      <div className="w-full px-12 py-4.5 bg-blue-banner leading-7 font-medium text-center">
        You won’t be able to change your metadata once your NFT is minted.
        Please review the information below before you tap mint or you can go
        back to make changes.
      </div>

      <Details review />

      <div className="flex justify-center p-6 mt-auto bg-gray-100 gap-14">
        <button
          className="w-48 p-4 font-medium leading-4 text-white transition rounded-md shadow bg-blue-light font-madeOuterSans hover:shadow-md"
          onClick={() => {
            navigate(-1);
          }}
        >
          Edit
        </button>
        <button
          className="w-48 p-4 font-medium leading-4 text-white transition rounded-md shadow bg-blue-dark font-madeOuterSans hover:shadow-md"
          onClick={() => setMinted(true)}
        >
          Mint
        </button>
      </div>

      <MintedModal
        isOpen={minted}
        onClose={() => {
          setMinted(false);
          navigate('/view-item');
        }}
      />
    </div>
  );
};

export default Overview;
