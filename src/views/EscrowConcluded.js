import Header from '../components/Base/Header';
import TradingInfo from '../components/Escrow/TradingInfo';
import cardPlaceholderImage from '../assets/images/card-placeholder.png';

const EscrowCanceled = () => {
  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="relative flex justify-center">
        <div className="absolute w-screen h-screen opacity-50">
          <img
            src={cardPlaceholderImage}
            alt="bg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative flex flex-col flex-1 w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <h1 className="text-3xl font-bold font-madeOuterSans">ESCROW</h1>

          <div className="flex items-center justify-center flex-1">
            <div>
              <TradingInfo concluded />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscrowCanceled;
