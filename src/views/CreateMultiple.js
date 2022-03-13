import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import CreateMultipleForm from '../components/Create/MultipleForm';

const CreateMultiple = () => {
  return (
    <div className="relative w-full h-full">
      <Header />

      <div className="flex justify-center">
        <div className="w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          <h1 className="text-5xl font-madeOuterSans">
            Create new collectible
          </h1>

          <CreateMultipleForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateMultiple;
