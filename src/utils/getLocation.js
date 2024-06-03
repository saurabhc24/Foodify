require("dotenv").config();

export async function getLocation() {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // console.log(position);

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const url = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=${latitude}&lng=${longitude}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host":
            "address-from-to-latitude-longitude.p.rapidapi.com",
        },
      };

      const res = await fetch(url, options);

      const locData = await res.json();

      // console.log(locData);

      return { longitude, latitude, locData };
    } else {
      throw new Error("Geolocation is not supported in your browser");
    }
  } catch (error) {
    console.error("Error getting location: " + error.message);
  }
}
