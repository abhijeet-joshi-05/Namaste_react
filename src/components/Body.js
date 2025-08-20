import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  
  const [restList, setRestList] = useState(resList);  
  
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = restList.filter(restau=>restau.info.avgRating > 4.5); 
          setRestList(filteredList)
        }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {restList.map((restaurant, index) => (
          <ResCard key={restaurant?.info?.id || index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body; 