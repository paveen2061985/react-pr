import RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  // State Variable
  const [restList, setRestList] = useState(restaurentList);

  return (
    <div className="body">
      <div className="filter">
        <button 
            className="filter-btn"
            onClick={() => {
              const filteredList = restList.filter(
                (restaurent) => restaurent.info.avgRating > 4
              )
              setRestList(filteredList);
            }}
            >Top Rated Restaurents</button>
      </div>
      <div className="restaurent-container">
        {restList.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
