import { resList } from "../utils/mockData";
import {useState, useEffect, useContext} from "react";
import RestaurantCard, {WithPromoted} from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import UserContext from "../utils/UserContext";

const BodyComponent = () =>{
  const [RestaurantList, setRestaurantList] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchString, setSearchString] = useState("");
  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  const {loggedInUser,setUserName} = useContext(UserContext);
  const RestaurantCardWithPromoted = WithPromoted(RestaurantCard);

  if(RestaurantList.length === 0){
    return <Shimmer/>
  }
    return(
      <div className="body">
        <div className="filter-data">
          <div className="p-4 m-4">
            <input className="border border-solid border-black" id="search-input" placeholder="Enter search text" onChange={(e)=>{
              setSearchString(e.target.value);
            }} />
            <button className="px-4 bg-green-100 m-4 py-1 rounded-lg" onClick={()=>{
              console.log(RestaurantList);
              console.log(searchString);
              const filteredRestaurantList = RestaurantList.filter(res=>res.info.name.toLowerCase().includes(searchString.toLowerCase()));
              console.log(filteredRestaurantList);
              setFilteredRestaurants(filteredRestaurantList);
            }}>Search</button>
            <button className="px-4 bg-gray-100 m-4 py-1 rounded-lg" onClick={()=>{
              setFilteredRestaurants(RestaurantList);
              debugger;
              const searchInput = document.getElementById('search-input');
              searchInput.value = "";
            }}>Clear Filters</button>
            <button className="px-4 bg-green-100 m-4 py-1 rounded-lg" onClick={()=>{
            const filteredData = RestaurantList.filter(restaurant => restaurant.info.avgRating > 4.1);
            console.log(filteredData);
            setFilteredRestaurants(filteredData);
          }}>Top Rated Restaurants</button>
          <label> UserName: </label>
          <input className="p-2 border-2 border-black" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          
        </div>
        <div className="flex items-center flex-wrap">
    {FilteredRestaurants.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}>
    {restaurant.info.promoted ? <RestaurantCardWithPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
    
    </Link>)}
  </div>
      </div>
    ) 
  }

export default BodyComponent;