import RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search..." />
          &nbsp;&nbsp;
          <button>Search</button>
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