import Header from '../components/Base/Header';
import EditForm from '../components/EditProfile/EditForm';

const EditProfile = () => {
  return (
    <div className="relative w-full h-full">
      <Header />

      <section className="flex justify-center flex-1 my-32">
        <div className="w-full max-w-sm px-4 py-6 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
          <h1 className="text-5xl leading-[56px] font-madeOuterSans text-gray-900">
            Edit profile
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            You can set preferred display name, create{' '}
            <span className="text-gray-900">your profile URL</span> and manage
            other personal settings.
          </p>

          <EditForm />
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
