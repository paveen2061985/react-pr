import RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button 
            className="filter-btn"
            onClick={() => {
              console.log("Filter by Top Rated Restaurents");
            }}
            >Top Rated Restaurents</button>
      </div>
      <div className="restaurent-container">
        {restaurentList.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
