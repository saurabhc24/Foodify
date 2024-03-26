import React, { useState, useEffect } from "react";
import { restaurant_menu_url } from "../utils/constants";
import RestroMenuShimmer from "./RestroMenuShimmer";
import { useParams } from "react-router-dom";
import { BiSolidPieChart } from "react-icons/bi";
import { TbCoinRupee } from "react-icons/tb";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []); //using empty dependency array so that we make API call on initial render and not everytime the page loads

  const fetchMenu = async () => {
    const data = await fetch(restaurant_menu_url + resId);

    const jsonMenuData = await data.json();
    console.log(jsonMenuData);
    setResInfo(jsonMenuData.data);
  };
  // console.log(resInfo);
  if (resInfo === null) {
    return <RestroMenuShimmer />;
  }

  const { name, areaName, city, cuisines, avgRating, totalRatingsString, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // conditional rendering
    if (resInfo.length === null) {
      let RestromenuShimmerArray = [];
      for (let i = 0; i < 30; i++) {
        RestromenuShimmerArray.push(<RestromenuShimmerArray key={i} />);
      }
      return (
        <>
          <div className="Menu RestroCardShimmerArray">
            {RestromenuShimmerArray}
          </div>
        </>
      );
    }

  return (
    <div className="Menu">
      <div className="restaurant-info">
        <div className="restro-details">
          <div className="restromenu-name">{name}</div>
          <div className="restromenu-cuisine">{cuisines.join(", ")}</div>
          <div className="restromenu-area">{areaName + ", " + city}</div>
        </div>
        <div className="restro-ratings">
          <div className="rating">&#x2605; {avgRating}</div>
          <hr className="rating-sep"></hr>
          <div className="total-rating">{totalRatingsString}</div>
        </div> 
      </div>
      <div className="restro-cost-deltime">
        <span><BiSolidPieChart /> {sla.slaString}</span><span><TbCoinRupee /> {costForTwoMessage}</span> 
      </div>
      <hr className="restor-cost-line"></hr>
      <div className="menu-food-items">
        <div className="menu-section">
          {cards.slice(2, cards.length - 2).map((cards) => (
            <div className="menu-category">
              <h3>{cards.card.card.title}</h3>
              <div className="menu-display">
                <div className="item-image">here image</div>
                <div className="dish-info">
                  here dish info
                  <div className="dish-name">dish name</div>
                  <div className="dish-price">dish price</div>
                  <div className="dish-description">dish description</div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;