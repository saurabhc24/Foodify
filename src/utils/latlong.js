import { useState, useEffect } from "react";

function userLocation() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  });
  return lat, lng;
}



export default userLocation;
