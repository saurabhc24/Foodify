import { useState } from "react";
import { LOGO_URL, restaurant_fetch_url } from "../utils/constants";

const Header = () => {
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="./Cart">Cart</a>
          </li>
          <li>
            <a href="./Signup">Sign In</a>
          </li>
          <li>
            <a href="./Help">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
