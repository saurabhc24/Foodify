import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import foodify from "../media/foodify.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={foodify} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <b>
              <Link to="/Login">Login</Link>
            </b>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/Help">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;