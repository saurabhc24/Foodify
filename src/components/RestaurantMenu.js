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
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Menu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleAccordion = (i) => {
    if (i === activeAccordionIndex) {
      setActiveAccordionIndex(null);
      setShowMenu(false);
    } else {
      setActiveAccordionIndex(i);
      setShowMenu(true);
    }
  };

  console.log(activeAccordionIndex, showMenu);
  // console.log(resInfo);

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
            <div className="w-[600px] font-bold text-[30px]">{name}</div>
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
          <div className="text-green-600 font-bold mb-2">&#x2605; {avgRating}</div>
          <hr className="border-gray-300 w-20"></hr>
          <div className="total-rating mt-2">{totalRatingsString}</div>
        </div>
      </div>

      <hr className="border-dashed border-t border-gray-300"></hr>

      <div className="menu-food-items">
        <div className="flex flex-wrap flex-row ">
          {cards
            ?.slice(2, cards.length - 2)
            ?.filter((cards) => cards.card.card?.itemCards != null)
            .map((cards, i) => (
              <div className="w-full" onClick={() => handleToggleAccordion(i)}>
                <div className="w-full">
                  <button className="w-full h-[50px] mt-[20px] flex flex-wrap flex-row justify-between items-center rounded-lg bg-gray-50">
                    <div className="font-bold text-[18px] ml-[20px]">
                      {cards.card.card?.itemCards
                        ? cards.card.card.title +
                          " (" +
                          cards.card.card.itemCards?.length +
                          ")"
                        : null}
                    </div>
                    <div className="mr-[20px]">
                      {activeAccordionIndex === i ? (
                        <FaChevronUp className="w-4 h-4 " />
                      ) : (
                        <FaChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {activeAccordionIndex === i && showMenu && (
                    <RestaurantMenuItem
                      cardItems={cards}
                      key={cards.card.card.title}
                      index={i}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
