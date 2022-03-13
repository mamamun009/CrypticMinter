import Card from '../components/Base/Card';
import Header from '../components/Base/Header';
import Tabs from '../components/ForSale/Tabs';
import card from '../data/card';

const ForSale = () => {
  return (
    <div className="relative w-full h-full">
      <Header />

      <section className="flex justify-center flex-1 my-32">
        <div className="w-full max-w-sm px-4 py-6 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <h1 className="text-5xl leading-tight font-madeOuterSans">
            List dunks for sale
          </h1>

          <div className="flex flex-col-reverse mt-16 space-y-10 space-y-reverse md:space-y-0 md:flex-row">
            {/* left */}

            <div className="w-full px-2 md:w-6/12 ">
              <h3 className="font-madeOuterSans font-medium text-lg leading-[22px] mb-5">
                Mode
              </h3>

              <Tabs />
            </div>

            {/* right */}
            <div className="flex justify-center w-full md:w-6/12 ">
              <div className="flex relative flex-col md:max-w-[340px] w-full text-left">
                <div className="sticky top-40">
                  <h3 className="font-madeOuterSans font-medium text-lg leading-[22px] mb-5">
                    Preview
                  </h3>
                  <div className="">
                    <Card item={card} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForSale;
