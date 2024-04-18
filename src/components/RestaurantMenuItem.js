import React from "react";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenuItem = ({ cardItems, index }) => {
  return (
    <div className="w-full flex flex-wrap justify-between">
      {cardItems.card.card?.itemCards
        ? cardItems.card.card.itemCards?.map((itemCards) => (
            <MenuItemCard itemCard={itemCards} key={index} />
          ))
        : null}
    </div>
  );
};

export default RestaurantMenuItem;
