import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.940108244989704&lng=77.73359346961144"
    );

    const jsonData = await response.json();

    console.log(jsonData);

    setListOfRestaurant(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="body">
      <div className="topRatedBtn">
        <button
          className="topRatedResBtn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
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
