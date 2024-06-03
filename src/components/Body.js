import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import RestroCardShimmer from "./RestroCardShimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { getLocation } from "../utils/getLocation";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [restroData, setRestroData] = useState();
  const [userLoc, setUserLoc] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const locationRes = await getLocation();
      setUserLoc(locationRes);
      const restaurant_fetch_url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationRes.latitude}&lng=${locationRes.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      const response = await fetch(restaurant_fetch_url);
      const jsonData = await response.json();

      setRestroData(jsonData);

      // console.log(jsonData);

      const listOfRestaurantArray =
        (jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants).length === 0
          ? jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

      // console.log(listOfRestaurantArray);
      setListOfRestaurant(listOfRestaurantArray);
      setFilteredRestaurant(listOfRestaurantArray);
    };

    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <div className="min-h-[75vh] flex flex-col justify-center items-center">
          <h1>⚠️Oops! Connection lost⚠️</h1>
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
          <div className="w-[200px] relative flex border-r-2 pr-3">
            <FaLocationDot className="w-[20px] h-[20px] mr-[5px] text-orange-400" />
            <p className="hidden md:block text-gray-600 mx-auto">
              <line className="text-sm text-gray-600 w-10 shine"></line>
            </p>
          </div>

          <div className="mx-3">
            <IoSearch className="w-[20px] h-[20px] text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for restaurants"
            className="w-full h-8 mr-5 py-2 text-xl outline-none text-gray-700"
          ></input>
          <button className="m-0 mx-3 font-montserrat font-sans bg-orange-500 text-white border-0 py-2 px-4 rounded-lg">
            Search
          </button>
        </div>
        <div>
          <line className="mx-[100px] text-gray-600 w-24 shine"></line>
        </div>
        <div className="mx-[70px]">
          <div className="mx-auto flex flex-wrap flex-row justify-around">
            {RestrocardShimmerArray}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="body">
      <div className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 w-6/12 mx-auto my-5 flex items-center">
        <div className="w-[200px] relative flex border-r-2 pr-3">
          <FaLocationDot className="w-[20px] h-[20px] mr-[5px] text-orange-400" />
          <p className=" capitalize hidden md:block text-gray-600 mx-auto">
            {restroData.data.cards[11].card.card.citySlug}
          </p>
        </div>

        <div className="mx-3">
          <IoSearch className="w-[20px] h-[20px] text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for restaurants"
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
          Order food online in {userLoc.locData.results[0].sublocality}
        </h2>
      </div>
      <div className="mx-[70px]">
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
