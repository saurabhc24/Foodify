import React from "react";
import { MENU_IMG_URL } from "../utils/constants";
import RestroMenuShimmer from "./RestroMenuShimmer";
import RestroMenuBannerShimmer from "./RestroMenuBannerShimmer";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BiSolidPieChart } from "react-icons/bi";
import { TbCoinRupee } from "react-icons/tb";


const Menu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  const handleToggleAccordion = (i) => {
    if (i === activeAccordionIndex) {
      setActiveAccordionIndex(null);
      setShowMenu(false);
    } else {
      setActiveAccordionIndex(i);
      setShowMenu(true);
    }
  };

  if (resInfo === null) {
    let RestromenuShimmerArray = [];
    for (let i = 0; i < 5; i++) {
      RestromenuShimmerArray.push(<RestroMenuShimmer key={i} />);
    }
    return (
      <>
        <RestroMenuBannerShimmer />
        <div className="w-full flex flex-wrap flex-row justify-between">
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
    <div className="w-9/12 mx-auto">
      <div className="mx-[40px] my-[30px] flex flex-wrap flex-row justify-between items-center">
        <div className="ml-[15px] flex flex-wrap flex-row items-center">
          <div
            className="bg-white h-[150px] w-[200px] bg-cover rounded-2xl"
            style={{
              backgroundImage: `url(${MENU_IMG_URL}${cloudinaryImageId})`,
            }}
          ></div>
          <div className="ml-[15px]">
            <div className="w-9/12 font-bold text-[30px]">{name}</div>
            <div className="text-slate-500">{cuisines.join(", ")}</div>
            <div className="text-slate-500">{areaName + ", " + city}</div>
            <div className="font-bold my-[10px] mx-0 flex flex-wrap flex-row">
              <span className="flex flex-row items-center">
                <BiSolidPieChart />
                &nbsp;&nbsp;{sla.slaString || availability.nextOpenTimeMessage}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="flex flex-row items-center w-auto mx-[5px]">
                <TbCoinRupee />
                &nbsp;&nbsp;{costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-evenly items-center shadow-md border border-white rounded-lg p-[15px] m-[15px] ">
          <div className="text-green-600 font-bold mb-2">
            &#x2605; {avgRating}
          </div>
          <hr className="border-gray-300 w-20"></hr>
          <div className="total-rating mt-2">{totalRatingsString}</div>
        </div>
      </div>

      <hr className="border-dashed border-t border-gray-300"></hr>

      <div className="menu-food-items">
        {cards
          ?.slice(2, cards.length - 2)
          ?.filter((cards) => cards.card.card?.itemCards != null)
          .map((cards, i) => (
            <RestaurantMenuItem
              cards={cards}
              key={cards.card.card.title}
              index={i}
              activeIndex={activeAccordionIndex}
              setActiveAccordionIndex={handleToggleAccordion}
              show = {showMenu}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
