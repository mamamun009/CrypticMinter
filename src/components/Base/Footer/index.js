import { logoInner, logoOuter } from '../../../assets/icons';
import Icon from '../../Utils/Icon';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="flex justify-center w-full border-t border-gray-100 bg-gray-100/30">
      <div className="w-full max-w-xs px-8 lg:max-w-6xl md:max-w-xl ">
        {/* upper */}
        <div className="flex flex-wrap py-12 gap-y-12">
          {/* left */}
          <div className="flex items-center justify-start w-full lg:w-1/2">
            {/* icon */}
            <div className="relative flex items-center justify-center ">
              <Icon
                icon={logoInner}
                className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
              <Icon icon={logoOuter} className="animate-spin-slow " />
            </div>
            {/* tagline */}
            <h2 className="ml-6 text-2xl text-gray-900 lg:mr-20 md:ml-10 ">
              The New Sneaker Economy.
            </h2>
          </div>
          {/* left */}
          <div className="flex w-full lg:w-1/2 ">
            {/* market place links */}
            <div className="w-full md:w-1/2">
              <h4 className="font-medium text-text-gray-900">Marketplace</h4>
              <div className="flex flex-col mt-10 space-y-6 text-sm font-medium leading-4 text-gray-600">
                <button
                  className="text-left "
                  onClick={() => navigate('/discover')}
                >
                  Discover
                </button>
                <button
                  className="text-left "
                  onClick={() => navigate('/activity')}
                >
                  Activity
                </button>
                <button
                  className="text-left "
                  onClick={() => navigate('/discover')}
                >
                  Mint DUNKS
                </button>
              </div>
            </div>

            {/* Support links */}
            <div className="w-full md:w-1/2">
              <h4 className="font-medium text-text-gray-900">Support</h4>
              <div className="flex flex-col mt-10 space-y-6 text-sm font-medium leading-4 text-gray-600">
                <button className="text-left ">Privacy Policy</button>
                <button className="text-left ">Terms of Service</button>
                <button className="text-left ">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="w-full h-px bg-gray-300" />

        {/* lower */}
        <div className="flex flex-col-reverse justify-between py-8 text-xs leading-5 md:flex-row">
          {/* left */}
          <span className="text-gray-500">© 2021 - DunkSwap ,Inc</span>

          {/* right */}
          <div className="flex">
            <p className="text-gray-900 ">
              We use 🍪 for better service. Please
            </p>
            <button className="ml-1 font-semibold text-blue-light">
              Allow
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
