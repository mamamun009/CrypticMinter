import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import metaMaskImage from '../assets/images/MetaMask.png';
import coinBaseImage from '../assets/images/Coinbase.png';
import rainbowImage from '../assets/images/Rainbow.png';
import walletConnect from '../assets/images/WalletConnect.png';
import WalletItem from '../components/ConnectWallet/WalletItem';
import Icon from '../components/Utils/Icon';
import { refreshIcon } from '../assets/icons';

import qrPlaceholder from '../assets/images/qr-code-placeholder.png';

const ConnectWallet = () => {
  return (
    <div className="relative w-full h-full">
      <Header />

      <div className="flex justify-center">
        <div className="relative w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <h1 className=" font-madeOuterSans text-5xl leading-[56px] text-gray-900 pb-10 border-b">
            Connect your wallet
          </h1>

          <div className="grid grid-cols-2 mt-20">
            <div className="self-start space-y-9">
              <WalletItem image={metaMaskImage} name="MetaMask" />
              <WalletItem image={coinBaseImage} name="Coinbase" />
              <WalletItem image={rainbowImage} name="Rainbow" />
              <WalletItem image={walletConnect} name="WalletConnect" />
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col max-w-[340px]">
                <div className="flex justify-between">
                  <h4 className="font-medium text-xl leading-[34px]">
                    QR Code
                  </h4>
                  <button className="flex items-center gap-2 text-lg font-medium text-blue-light">
                    <Icon icon={refreshIcon} />
                    Refresh
                  </button>
                </div>

                <p className="text-[18.66px] text-gray-400">
                  Scan this QR code to start connecting
                </p>

                <div className="mt-2.5 w-full aspect-square">
                  <img
                    src={qrPlaceholder}
                    alt="QR Code"
                    className="object-contain w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConnectWallet;
