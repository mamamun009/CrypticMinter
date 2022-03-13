const ArtworkItem = ({ image, title, subtitle, mobile }) => {
  return (
    <button className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <div>
          <p
            className={`${
              mobile ? "search_box_title_m ml-4" : "search_box_title_d ml-4"
            }`}
          >
            {title}
          </p>
          {mobile ? (
            " "
          ) : (
            <p className="font-medium leading-4 text-gray-400 text-xxs">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export default ArtworkItem;
