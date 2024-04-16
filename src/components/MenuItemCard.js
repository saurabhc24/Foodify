import { MdOutlineImageNotSupported } from "react-icons/md";
import { MENU_IMG_URL } from "../utils/constants";

const MenuItemCard = (props) => {
  const { itemCard } = props;

  const { imageId, name, price, defaultPrice, description, isBestseller } =
    itemCard?.card?.info;

  return (
    <div className="flex flex-wrap flex-col justify-center items-center h-auto">
      <div className="mx-0 my-7 flex flex-wrap flex-row items-center">
        <div
          className="w-40 h-28 bg-gray-200 bg-center bg-cover rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(${MENU_IMG_URL}${imageId})`,
          }}
        >
          <div>{imageId ? "" : <MdOutlineImageNotSupported />}</div>
        </div>
        <div className="ml-[15px] w-[350px]">
          <div className="text-lg font-bold break-words">{name}</div>
          <div className="dish-price font-semibold text-mg">
            ₹ {price / 100 || defaultPrice / 100}&nbsp;&nbsp;<span className="text-orange-500">{isBestseller ? "Bestseller" : "" }</span>
          </div>
          <div className="text-gray-500 text-sm w-72 overflow-hidden leading-relaxed max-h-24 break-words">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
