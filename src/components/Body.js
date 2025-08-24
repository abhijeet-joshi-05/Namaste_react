import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import { findRestaurant } from "../../utils/findRestaurant";
import Shimmer from "./shimmer";



const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestList, setFilteredRestList] = useState([]);
  
  useEffect(() => {
    fetchData();
    
  }, []);


  const fetchData = async () => {
    const filteredData = await findRestaurant();
    /*console.log(filteredData);
    console.log(resList)
    setRestList(filteredData); */
    setRestList(filteredData);
    setFilteredRestList(filteredData);
  };

  
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
            
              let searchData = restList.filter((rest) =>rest.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestList(searchData);
              
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restList.filter(
              (restau) => restau.info.avgRating > 4.5
            );
            setFilteredRestList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestList.map((restaurant, index) => (
          <ResCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
