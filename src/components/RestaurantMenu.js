import React, { useState } from "react";
import { useEffect } from "react";
import { restaurant_menu_url } from "../utils/constants";
import RestroCardShimmer from "./RestroCardShimmer";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []); //using empty dependency array so that we make API call on initial render and not everytime the page loads

  const fetchMenu = async () => {
    const data = await fetch(restaurant_menu_url);

    const jsonMenuData = await data.json();
    // console.log(jsonMenuData);
    setResInfo(jsonMenuData.data);
  };
  // console.log(resInfo);

  // const {restroName,} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map();

  return resInfo === null ? (
    <RestroCardShimmer />
  ) : (
    <div className="Menu">
      <div className="restaurant-info">
        <div className="restro-details">
          <h2>{resInfo?.cards[0]?.card?.card?.info?.name}</h2>
          <p>{resInfo?.cards[0]?.card?.card?.info?.locality}</p>
          <span>
            {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </span>
        </div>
        <div className="restro-ratings">
          <div className="rating">
            &#x2605; {resInfo?.cards[0]?.card?.card?.info?.avgRating}
          </div>
          <div className="total-rating">
            {resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
