import React from "react";
import MenuItemCard from "./MenuItemCard";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const RestaurantMenuItem = ({
  cards,
  index,
  activeIndex,
  setActiveAccordionIndex,
  show,
}) => {
  return (
    <div className="flex flex-wrap flex-row ">
      <div className="w-full">
        <div className="w-full">
          <button
            className="w-full h-[50px] mt-[20px] flex flex-wrap flex-row justify-between items-center rounded-lg bg-gray-50"
            onClick={() => setActiveAccordionIndex(index)}
          >
            <div className="font-bold text-[18px] ml-[20px]">
              {cards.card.card?.itemCards
                ? cards.card.card.title +
                  " (" +
                  cards.card.card.itemCards?.length +
                  ")"
                : null}
            </div>
            <div className="mr-[20px]">
              {activeIndex === index ? (
                <FaChevronUp className="w-4 h-4 " />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </div>
          </button>
          {activeIndex === index && show && (
            <div className="w-full flex flex-wrap justify-between">
              {cards.card.card?.itemCards
                ? cards.card.card.itemCards?.map((cards) => (
                    <MenuItemCard itemCard={cards} key={index} />
                  ))
                : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
