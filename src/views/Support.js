import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import Tabs from '../components/Support/Tabs';

const Activity = () => {
  return (
    <div className="relative w-full h-full">
      <Header />

      <div className="flex justify-center">
        <div className="relative w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <h1 className="font-madeOuterSans text-5xl leading-[56px] text-gray-900">
            Support
          </h1>
          <p className="mt-5 ">
            Please go through our FAQs and documenation to aquaint yourself with
            the platform.
            <br />
            <button className="underline text-blue-light ">
              {' '}
              Contact us
            </button>{' '}
            if you require further assistance.
          </p>

          <Tabs />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Activity;
