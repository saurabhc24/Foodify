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
      
      return { latitude, longitude };
    } else {
      throw new Error("Geolocation is not supported in your browser");
    }
  } catch (error) {
    console.error("Error getting location: " + error.message);
  }
}
