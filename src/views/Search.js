import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import Tabs from '../components/Search/Tabs';

const Search = () => {
  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="flex justify-center">
        <div className="relative w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
          <Tabs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
