const maxPicSize = 10 * 1024 * 1024;

const ProfilePic = ({ profilePic, setProfilePic }) => {
  return (
    <div className="flex gap-8 ">
      <div className="flex-shrink-0 w-[125px] h-[125px] overflow-hidden rounded-full">
        <img src={profilePic} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="">
        <h4 className="font-medium text-gray-900">Profile photo</h4>
        <p className="mt-2 text-xs leading-5 text-gray-600 ">
          We recommend an image
          <br /> of at least 400x400. <br />
          Gifs work too 🙌
        </p>
        <button className="relative px-4 py-3 mt-4 overflow-hidden text-sm font-medium border border-gray-300 rounded-full">
          Upload
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer file:cursor-pointer"
            onChange={(e) => {
              const file = e.target.files[0];
              setProfilePic(file);
            }}
            accept="image/png, image/jpeg, image/jpg, image/gif"
            maxLength={maxPicSize}
          />
        </button>
      </div>
    </div>
  );
};

export default ProfilePic;
