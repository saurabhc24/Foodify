import { CDN_IMG_URL } from "../utils/constants";


const RestroCard = (props) => {
  const { restaurant } = props;

  const { avgRating, name, cuisines, areaName, totalRatingsString } =
    restaurant?.info;
  const { deliveryTime } = restaurant?.info?.sla;

  return (
    <div className="p-0 m-0 ">
      <div className="bg-white shadow-lg hover:cursor-pointer hover:scale-95 mt-7 rounded-lg overflow-hidden w-72">
        <div
          className="bg-center bg-cover h-40 w-full relative"
          style={{
            backgroundImage: `url(${CDN_IMG_URL}${restaurant?.info?.cloudinaryImageId})`,
          }}
        >
          <div className="absolute bg-gray-100 px-2 py-1 text-xs rounded bottom-3 right-3">{deliveryTime} mins</div>
          <div className="absolute bg-green-700 px-2 py-1 text-xs text-white rounded bottom-3 left-3">
            {avgRating} &#x2605; | {totalRatingsString}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="place">
              <p className="text-xl font-bold text-gray-900 line-clamp-1">{name}</p>
              <p className="text-sm text-gray-600 line-clamp-1">{cuisines.join(", ")}</p>
              <p className="text-sm text-gray-600">{areaName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;