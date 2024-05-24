import { CDN_URL } from "../utils/constants";

const restaurentImageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };
  const RestaurentCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      areaName,
      sla,
    } = resData?.info;
    return (
      <div className="restaurent-card">
        <img
          style={restaurentImageStyle}
          src= {CDN_URL + cloudinaryImageId}
          alt="restaurent"
        />
        <h2>{name}</h2>
        <h4>Rating: {avgRating} stars. <span>{sla?.slaString}</span></h4>
        <p>{cuisines.join(',')}</p>
        <p>{areaName}</p>
      </div>
    );
  };

  export default RestaurentCard;