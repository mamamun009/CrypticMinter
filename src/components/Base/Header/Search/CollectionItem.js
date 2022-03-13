const CollectionItem = ({ image, title, items, mobile }) => {
  return (
    <button className="flex items-center justify-between w-full ">
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <p
          className={`${
            mobile ? "search_box_title_m ml-4" : "search_box_title_d ml-4"
          }`}
        >
          {title}
        </p>
      </div>
      {mobile ? (
        ""
      ) : (
        <div className="font-medium leading-4 text-gray-400 text-xxs">
          {numberWithCommas(items)} items
        </div>
      )}
    </button>
  );
};

export default CollectionItem;

// convert number to string with comma
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
