import { badgeIcon } from "../../../../assets/icons";
import Icon from "../../../Utils/Icon";

const CreatorItem = ({ image, name, verified, mobile }) => {
  return (
    <button className="flex items-center justify-between w-full ">
      <div className="flex items-center">
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <p
          className={`${
            mobile ? "search_box_title_m ml-4" : "search_box_title_d ml-4"
          }`}
        >
          {name}
        </p>
        {verified && (
          <div className="ml-4 ">
            <Icon icon={badgeIcon} />
          </div>
        )}
      </div>
    </button>
  );
};

export default CreatorItem;
