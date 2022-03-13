import Header from '../components/Base/Header';
import Footer from '../components/Base/Footer';
import Details from '../components/Overview/Details';
import DetailsTabs from '../components/Overview/DetailsTabs';
import { useLocation } from 'react-router-dom';

const ViewItem = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  return (
    <div className="relative w-full h-full">
      <Header />

      <div className="my-32">
        <Details
          bid={query.get('onBid') === 'true'}
          purchase={query.get('onSale') === 'true'}
        />

        <DetailsTabs />
      </div>

      <Footer />
    </div>
  );
};

export default ViewItem;
