import { Link } from "react-router-dom";
import foodify from "../media/foodify.png";

const Header = () => {
  return (
    <div className="flex w-full justify-between [box-shadow:2px_10px_20px_rgba(163,_163,_162,_0.295)]">
      <div className=" ml-10">
        <Link to="/">
          <img className="w-16 py-3" src={foodify} />
        </Link>
      </div>
      <div className="flex w-full justify-between flex-row-reverse">
        <ul className="flex text-base list-none pr-10 text-gray-600">
          <li className="m-4 p-4 float-right hover:text-black">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="m-4 p-4 float-right hover:text-black">
            <Link to="/Help">Help</Link>
          </li>
          <li className="m-4 p-4 float-right hover:text-black">
            <b>
              <Link to="/Login">Login</Link>
            </b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
