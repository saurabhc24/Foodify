import { CDN_IMG_URL } from "../utils/constants";


const RestroCard = (props) => {
  const { restaurant } = props;

  const { avgRating, name, cuisines, areaName, totalRatingsString } =
    restaurant?.info;
  const { deliveryTime } = restaurant?.info?.sla;

  return (
    <div className="cards-container">
      <div className="card">
        <div
          className="card-media"
          style={{
            backgroundImage: `url(${CDN_IMG_URL}${restaurant?.info?.cloudinaryImageId})`,
          }}
        >
          <div className="delivery-time">{deliveryTime} mins</div>
          <div className="rating">
            {avgRating} &#x2605; | {totalRatingsString}
          </div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cuisines.join(", ")}</p>
              <p className="location">{areaName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;