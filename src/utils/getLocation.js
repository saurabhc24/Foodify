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
      const url = `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${latitude}%2C${longitude}&language=en`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host":
            "trueway-geocoding.p.rapidapi.com",
        },
      };
      const res = await fetch(url, options);
      const locData = await res.json();
      
      return { latitude, longitude, locData };
    } else {
      throw new Error("Geolocation is not supported in your browser");
    }
  } catch (error) {
    console.error("Error getting location: " + error.message);
  }
}
