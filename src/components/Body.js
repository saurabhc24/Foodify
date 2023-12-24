import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import RestroCardShimmer from "./RestroCardShimmer";
import Skeleton from "react-loading-skeleton";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.940108244989704&lng=77.73359346961144"
    );

    const jsonData = await response.json();

    console.log(jsonData);

    setListOfRestaurant(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    let RestrocardShimmerArray = [];
    for (let i = 0; i <= 10; i++) {
      RestrocardShimmerArray.push(<RestroCardShimmer key={i} />);
    }
    return (
      <>
        <div className="topRatedBtn">
          <h2 className="topRatedRes">Top rated restaurants in Bengaluru</h2>
        </div>
        <div className="res-container RestroCardShimmerArray">{RestrocardShimmerArray}</div>
      </>
    );
  }

  return (
    <div className="body">
      <div className="topRatedBtn">
        {/* <button
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
        </button> */}
        <h2 className="topRatedRes">Top rated restaurants in Bengaluru</h2>
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
