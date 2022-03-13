import Header from '../components/Base/Header';
import Chat from '../components/Escrow/Chat';
import ImageCard from '../components/Escrow/ImageCard';
import MailingInfo from '../components/Escrow/MailingInfo';
import TradeTime from '../components/Escrow/TradeTime';
import TradingInfo from '../components/Escrow/TradingInfo';

const Escrow = () => {
  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="flex justify-center">
        <div className="flex-1 w-full max-w-sm px-4 my-40  md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <h1 className="text-3xl font-bold font-madeOuterSans">ESCROW</h1>

          <div className="grid grid-cols-2  gap-14">
            <div>
              <TradeTime />

              <MailingInfo />

              <ImageCard />

              <TradingInfo />
            </div>
            <div className="relative">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrow;
