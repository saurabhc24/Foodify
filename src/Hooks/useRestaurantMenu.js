import { useEffect, useState } from "react";
import { restaurant_menu_url } from "../utils/constants";
import { getLocation } from '../utils/getLocation';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []); //using empty dependency array so that we make API call on initial render and not everytime the page loads

  const fetchMenu = async () => {
    const locationRes = await getLocation();
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${locationRes.latitude}&lng=${locationRes.longitude}&restaurantId=` + resId);

    const jsonMenuData = await data.json();
    console.log(jsonMenuData);
    setResInfo(jsonMenuData.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
