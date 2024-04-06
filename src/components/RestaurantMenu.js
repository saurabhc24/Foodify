import React, { useState, useEffect } from "react";
import { restaurant_menu_url, MENU_IMG_URL } from "../utils/constants";
import RestroMenuShimmer from "./RestroMenuShimmer";
import RestroMenuBannerShimmer from "./RestroMenuBannerShimmer";
import { useParams } from "react-router-dom";
import { BiSolidPieChart } from "react-icons/bi";
import { TbCoinRupee } from "react-icons/tb";
import { MdOutlineImageNotSupported } from "react-icons/md";
import MenuItemCard from "./MenuItemCard";

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
    let RestromenuShimmerArray = [];
    for (let i = 0; i < 5; i++) {
      RestromenuShimmerArray.push(<RestroMenuShimmer key={i} />);
    }
    return (
      <>
        <RestroMenuBannerShimmer />
        <div className="menu-category RestromenuShimmerArray">
          {RestromenuShimmerArray}
        </div>
      </>
    );
  }

  const {
    name,
    areaName,
    city,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    cloudinaryImageId,
    availability,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  // conditional rendering

  return (
    <div className="Menu">
      <div className="restaurant-info">
        <div className="restro-details">
          <div
            className="resto-disp-image"
            style={{
              backgroundImage: `url(${MENU_IMG_URL}${cloudinaryImageId})`,
            }}
          ></div>
          <div className="restromenu-details">
            <div className="restromenu-name">{name}</div>
            <div className="restromenu-cuisine">{cuisines.join(", ")}</div>
            <div className="restromenu-area">{areaName + ", " + city}</div>
            <div className="restro-cost-deltime">
              <span>
                <BiSolidPieChart />{" "}
                {sla.slaString || availability.nextOpenTimeMessage}
              </span>
              <span>
                <TbCoinRupee /> {costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
        <div className="restro-ratings">
          <div className="rating">&#x2605; {avgRating}</div>
          <hr className="rating-sep"></hr>
          <div className="total-rating">{totalRatingsString}</div>
        </div>
      </div>

      <hr className="restor-cost-line"></hr>

      <div className="menu-food-items">
        <div className="menu-section">
          {cards
            ?.slice(2, cards.length - 2)
            ?.filter((cards) => cards.card.card?.itemCards != null)
            .map((cards) => (
              <div className="menu-div">
                <div className="menu-category">
                  <h3>
                    {cards.card.card?.itemCards
                      ? cards.card.card.title +
                        " (" +
                        cards.card.card.itemCards?.length +
                        ")"
                      : null}
                  </h3>
                  {cards.card.card?.itemCards
                    ? cards.card.card.itemCards?.map((itemCards) => (
                        <MenuItemCard itemCard={itemCards} />
                      ))
                    : null}
                </div>
                <hr className="menu-section-line"></hr>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
