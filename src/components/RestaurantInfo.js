import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import {useParams} from "react-router"
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = ()=> {
    const [resInfo,setResInfo] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        console.log('useEffect called');
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const fetchedData = await fetch(MENU_API + id);
        const json = await fetchedData.json();
        console.log(json);
        setResInfo(json)
    }

    const [showIndex,setShowIndex] = useState(0);
    if (resInfo === null) return <Shimmer/>

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>e.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("pData");
    console.log(categories);
    console.log(itemCards);
    return(
        <div className="text-center">
        <h1 className="font-bold">{name}</h1>
        <p className="font-bold italic text-sm">{cuisines.join(", ")} - {costForTwoMessage}</p>
       {categories.map((category, index)=> <RestaurantCategory data={category} showItems={index== showIndex ? true:false} setShowIndex ={()=> setShowIndex(index)}/>)}
        <p></p>
        </div>
    )
}

export default RestaurantInfo;