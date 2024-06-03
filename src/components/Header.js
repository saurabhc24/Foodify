import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import foodify from "../media/foodify.png";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";
import useLoginInfo from "../Hooks/useLoginInfo";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items); //subscribing to the store using selector

  return (
    <div className="flex w-full justify-between [box-shadow:2px_10px_20px_rgba(163,_163,_162,_0.295)]">
      <div className="my-auto ml-10">
        <Link to="/">
          <img className="w-16 py-3" src={foodify} />
        </Link>
      </div>
      <div className="flex w-full justify-between flex-row-reverse">
        <ul className="flex text-base list-none text-gray-600">
          <li className="m-4 p-4 float-right hover:text-black flex items-center relative">
            <Link to="/About" className="relative flex items-center gap-2">
              <IoInformationCircle className="w-4 h-4 text-gray-600 " />
              <p className="hidden md:block text-gray-600 hover:text-black">
                About
              </p>
            </Link>
          </li>
          <li className="m-4 p-4 float-right hover:text-black flex items-center relative ">
            <Link to="/Cart" className="relative flex items-center gap-2">
              <LuShoppingCart className="w-4 h-4 text-gray-600 " />{" "}
              <p className="hidden md:block text-gray-600 hover:text-black ">
                Cart
              </p>
              {
                <p className="absolute -top-3 -right-4 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                  {cartItems.length}
                </p>
              }
            </Link>
          </li>
          <li
            className="m-4 p-4 float-right hover:text-black flex items-center relative"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            <b>
              <Link to="/Login" className="relative flex items-center gap-2">
                <RiAccountCircleFill />
                <p className="hidden md:block text-gray-600 hover:text-black ">
                  Login
                </p>
              </Link>
            </b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
