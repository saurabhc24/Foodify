import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import RestroCardShimmer from "./RestroCardShimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  // navigator.geolocation.getCurrentPosition((pos) => {
  //   const { latitude, longitude } = pos.coords;
  //   setLat(latitude);
  //   setLng(longitude);
  // })

  


  useEffect(() => {
    function getLocation() {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      setLat(latitude);
      setLng(longitude);
    }
    getLocation();
    console.log("latitude ", lat, "longitude", lng);
    const fetchData = async () => {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.940108244989704&lng=77.73359346961144`
        // `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.}&lng=${lng}`
      );

      const jsonData = await response.json();

      // console.log(jsonData);

      const listOfRestaurantArray =
        (jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants).length === 0
          ? jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

      setListOfRestaurant(listOfRestaurantArray);
    };

    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.940108244989704&lng=77.73359346961144"
  //   );

  //   const jsonData = await response.json();

  //   // console.log(jsonData);

  //   setListOfRestaurant(
  //     jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // };

  // conditional rendering
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
        <div className="res-container RestroCardShimmerArray">
          {RestrocardShimmerArray}
        </div>
      </>
    );
  }

  return (
    <div className="body">
      <div className="topRatedBtn">
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
