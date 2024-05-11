import React from "react";
import { Link } from "react-router-dom";
import cart from "../media/cart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectTotalPrice,
} from "../slice/cartSlice";
import { MENU_IMG_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = useSelector(selectTotalPrice);
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col grow min-h-[75vh] justify-center items-center">
        <img className=" w-52 py-11" src={cart} />
        <p className=" text-[20px] font-bold">
          No items in your cart, but plenty on our menu!{" "}
        </p>
        <button className="my-6 mx-3 font-montserrat font-sans bg-orange-200/50 hover:bg-orange-200/80 font-bold text-orange-500 border-0 py-2 px-4 rounded-lg">
          <Link to="/" className="relative flex items-center gap-2">
            <p>Browse Restaurants</p>
          </Link>
        </button>
      </div>
    );
  }

  return (
    <div className="mx-[60px] py-8 pb-16">
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        <ul className="basis-7/12 justify-center">
          {cartItems &&
            cartItems.map((item) => (
              <li
                key={item?.item?.card?.info?.id}
                className="flex gap-4 justify-between max-w-[600px] my-4"
              >
                <div className="basis-3/12">
                  <div
                    className="w-40 h-28 bg-gray-200 bg-center bg-cover rounded-lg flex"
                    style={{
                      backgroundImage: `url(${MENU_IMG_URL}${item?.item?.card?.info?.imageId})`,
                    }}
                    alt=""
                  />
                </div>
                <div className="basis-9/12">
                  <p className="text-lg font-semibold">
                    {item?.item?.card?.info?.name}
                  </p>

                  <p className="my-2 space-x-1">
                    <span className="font-semibold">
                      ₹{" "}
                      {item?.quantity *
                        parseFloat(
                          item?.item?.card?.info?.finalPrice / 100 ||
                            item?.item?.card?.info?.defaultPrice / 100 ||
                            item?.item?.card?.info?.price / 100
                        )}
                      <span className="text-gray-800 font-normal">
                        {"  "}(
                        {item?.item?.card?.info?.finalPrice / 100 ||
                          item?.item?.card?.info?.defaultPrice / 100 ||
                          item?.item?.card?.info?.price / 100}
                        {" × "}
                        {item?.quantity})
                      </span>
                    </span>
                  </p>

                  {/* actions */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          decreaseQuantity(item?.item?.card?.info?.id)
                        }
                        disabled={item?.item?.quantity === 1}
                        className={
                          "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                        }
                      >
                        -
                      </button>
                      <p className="font-bold w-8 h-8 flex justify-center items-center">
                        {item?.quantity}
                      </p>
                      <button
                        onClick={() =>
                          increaseQuantity(item?.item?.card?.info?.id)
                        }
                        className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item?.item?.card?.info?.id)}
                      className="border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="basis-5/12 h-fit sticky top-40 p-8 rounded-md border shadow-md my-8 md:m-0">
          <h2 className="text-xl font-bold border-b pb-4">Order Summary</h2>

          <div className="py-4 text-lg space-y-4 border-b">
            <div className="flex justify-between items-center font-semibold">
              <p className="font-normal">Price ({cartItems.length} items)</p>
              <p>₹ {parseFloat(totalPrice / 100)}</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-normal">Discount (10%)</p>
              <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-normal">Delivery charges (5%)</p>
              <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
            </div>

            <p className="text-sm my-2">
              You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
            </p>
          </div>

          <div className="py-4 border-b">
            <div className="md:flex justify-between items-center font-bold text-lg md:text-2xl">
              <h1>Total Amount</h1>
              <h1 className="text-orange-500">
                ₹ {parseFloat(totalAmt).toFixed(2)}
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-row ">
            <button className="flex-1 block mt-4 mx-1 uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md">
              Place order
            </button>
            <button
              onClick={() => handleClearCart()}
              className="flex-1 block mt-4 mx-1 uppercase font-bold text-lg border border-orange-600 text-orange-600 bg-white text-center p-4 rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
