import { MdOutlineImageNotSupported } from "react-icons/md";
import { MENU_IMG_URL } from "../utils/constants";

const MenuItemCard = (props) => {
  const { itemCard } = props;

  const { imageId,name,price,defaultPrice,description } = itemCard?.card?.info;

  return (
    <div className="menu-card">
      <div className="menu-display">
        <div
          className="item-image"
          style={{
            backgroundImage: `url(${MENU_IMG_URL}${imageId})`,
          }}
        >
          <div>
            {imageId ? "" : <MdOutlineImageNotSupported />}
          </div>
        </div>
        <div className="dish-info">
          <div className="dish-name">{name}</div>
          <div className="dish-price">
            ₹ {price / 100 || defaultPrice / 100}
          </div>
          <div className="dish-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
