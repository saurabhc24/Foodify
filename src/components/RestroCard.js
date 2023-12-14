import { CDN_IMG_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { restaurant } = props;

  const { avgRating, name, cuisines, areaName } = restaurant?.info;
  const { slaString } = restaurant?.info?.sla;

  return (
    <div className="cards-container">
      <div className="card">
        <div
          className="card-media"
          style={{
            backgroundImage: `url(${CDN_IMG_URL}${restaurant?.info?.cloudinaryImageId})`,
          }}
        >
          <div className="delivery-time">{slaString}</div>
          <div className="rating">{avgRating} &#x2605;</div>
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
