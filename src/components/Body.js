import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="topRatedBtn">
        <button className="topRatedResBtn" onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          console.log(filteredList);
          setListOfRestaurant(filteredList);
        }}>
          <span>Top Rated Restaurants in Bangalore</span>
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurants) => (
          <RestroCard key={restaurants.info.id} restaurant={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
