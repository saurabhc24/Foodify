import toast from "react-hot-toast";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { MENU_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const MenuItemCard = (props) => {
  const { itemCard } = props;

  const { imageId, name, price, defaultPrice, description, isBestseller } =
    itemCard?.card?.info;

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart());
    toast.success('Item added to cart!');
  };

  return (
    <div className="flex flex-wrap flex-col justify-center items-center h-auto" >
      <div className="flex flex-wrap flex-row items-center">
        <div className="mx-0 my-7 ">
          <div
            className="w-40 h-28 bg-gray-200 bg-center bg-cover rounded-lg flex  "
            style={{
              backgroundImage: `url(${MENU_IMG_URL}${imageId})`,
            }}
          >
            <div className="flex flex-wrap justify-center w-full">
              {imageId ? (
                isBestseller ? (
                  <div className="h-[25px] text-white bg-orange-500 text-xs font-bold p-[5px] rounded relative bottom-2 right-14">
                    Bestseller
                    {""}
                  </div>
                ) : null
              ) : (
                <MdOutlineImageNotSupported className=" items-center mx-auto my-auto" />
              )}
            </div>
          </div>
          <button
            className=" text-green-500 bg-white font-bold px-[25px] py-[5px] rounded-[7px] relative bottom-3 left-10 shadow-md border"
            onClick={addItem}
          >
            Add
          </button>
        </div>

        <div className="ml-[15px] w-[350px]">
          <div className="text-lg font-bold break-words">{name}</div>
          <div className="dish-price font-semibold text-mg flex flex-wrap flex-row items-center">
            ₹ {price / 100 || defaultPrice / 100}&nbsp;&nbsp;
          </div>
          <div className="text-gray-500 text-sm w-72 overflow-hidden leading-relaxed max-h-24 break-words">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
