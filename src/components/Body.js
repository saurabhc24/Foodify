import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import RestroCardShimmer from "./RestroCardShimmer";
import { restaurant_fetch_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restaurant_fetch_url);
      const jsonData = await response.json();

      console.log(jsonData);

      const listOfRestaurantArray =
        (jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants).length === 0
          ? jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

      console.log(listOfRestaurantArray);
      setListOfRestaurant(listOfRestaurantArray);
      setFilteredRestaurant(listOfRestaurantArray);
    };

    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
          <h1>Oops! Connection lost</h1>
          <p>
            Looks like you're offline, please check your internet connection.
          </p>
        </div>
      </>
    );
  }

  // conditional rendering
  if (listOfRestaurant.length === 0) {
    let RestrocardShimmerArray = [];
    for (let i = 0; i < 30; i++) {
      RestrocardShimmerArray.push(<RestroCardShimmer key={i} />);
    }
    return (
      <>
        <div className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 w-6/12 mx-auto my-5 flex items-center">
          <div className="mx-3">
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
            className="w-full h-8 mr-5 py-2 text-xl outline-none text-gray-700"
          ></input>
          <button className="m-0 mx-3 font-montserrat font-sans bg-orange-500 text-white border-0 py-2 px-4 rounded-lg">
            Search
          </button>
        </div>
        <div className="mx-[100px] flex flex-wrap flex-row justify-evenly">
          {RestrocardShimmerArray}
        </div>
      </>
    );
  }

  return (
    <div className="body">
      <div className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 w-6/12 mx-auto my-5 flex items-center">
        <div className="mx-3">
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
          className="w-full h-8 mr-5 py-2 text-xl outline-none text-gray-700"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="m-0 mx-3 font-montserrat font-sans bg-orange-500 text-white border-0 py-2 px-4 rounded-lg"
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
      <div className="topRated">
        <h2 className="mx-[100px] font-bold text-[24px]">
          Restaurants near you
        </h2>
      </div>
      <div className="mx-[70px] ">
        <div className="mx-auto flex flex-wrap flex-row justify-around">
          {filteredRestaurant.map((restaurants) => (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              <RestroCard restaurant={restaurants} />
            </Link>
          ))}
        </div>
        <hr className="border-solid border-t border-gray-300 mt-[30px]"></hr>
      </div>
    </div>
  );
};

export default Body;
