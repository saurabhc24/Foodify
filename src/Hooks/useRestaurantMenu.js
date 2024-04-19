import { useEffect, useState } from "react";
import { restaurant_menu_url } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []); //using empty dependency array so that we make API call on initial render and not everytime the page loads

  const fetchMenu = async () => {
    const data = await fetch(restaurant_menu_url + resId);

    const jsonMenuData = await data.json();

    setResInfo(jsonMenuData.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
