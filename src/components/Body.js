import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import RestroCardShimmer from "./RestroCardShimmer";
import { restaurant_fetch_url } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restaurant_fetch_url);
      const jsonData = await response.json();

      // console.log(jsonData);

      const listOfRestaurantArray =
        (jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants).length === 0
          ? jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

      // console.log(listOfRestaurant)
      setListOfRestaurant(listOfRestaurantArray);
      setFilteredRestaurant(listOfRestaurantArray);
    };

    fetchData();
  }, []);

  // conditional rendering
  if (listOfRestaurant.length === 0) {
    let RestrocardShimmerArray = [];
    for (let i = 0; i < 30; i++) {
      RestrocardShimmerArray.push(<RestroCardShimmer key={i} />);
    }
    return (
      <>
        <div className="res-container RestroCardShimmerArray">
          {RestrocardShimmerArray}
        </div>
      </>
    );
  }

  return (
    <div className="body">
      <div className="searchbar">
        <div className="searchicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#828282"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iwHbVQ"
          >
            <title>Search</title>
            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="searchbarinput"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="searchBtn"
          onClick={() => {
            const filteredRestaurantList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurantList);
          }}
        >
          Search
        </button>
      </div>
      <div className="topRatedBtn">
        <h2 className="topRatedRes">Restaurants near you</h2>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link key={restaurants.info.id} to={"/restaurants/" + restaurants.info.id }><RestroCard restaurant={restaurants} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;