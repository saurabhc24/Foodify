import React from "react";
import { MENU_IMG_URL } from "../utils/constants";
import RestroMenuShimmer from "./RestroMenuShimmer";
import RestroMenuBannerShimmer from "./RestroMenuBannerShimmer";
import { useParams } from "react-router-dom";
import { BiSolidPieChart } from "react-icons/bi";
import { TbCoinRupee } from "react-icons/tb";
import MenuItemCard from "./MenuItemCard";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

const Menu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
    <div className="mt-12 mx-44">
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
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="flex flex-row items-center w-auto mx-[5px]">
                <TbCoinRupee />
                &nbsp;&nbsp;{costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-evenly items-center shadow-md border border-white rounded-lg p-[15px] m-[15px] ">
          <div className="text-green-600 font-bold">&#x2605; {avgRating}</div>
          <hr className="border-gray-300 w-20"></hr>
          <div className="total-rating">{totalRatingsString}</div>
        </div>
      </div>

      <hr className="border-dashed border-t border-gray-300"></hr>

      <div className="menu-food-items">
        <div className="flex flex-wrap flex-row">
          {cards
            ?.slice(2, cards.length - 2)
            ?.filter((cards) => cards.card.card?.itemCards != null)
            .map((cards) => (
              <div className="w-full">
                <div className="w-full flex flex-wrap justify-between">
                  <h3 className="w-full mt-5 font-bold text-[25px]">
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
                <hr className="border-dashed border-t border-gray-300"></hr>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
