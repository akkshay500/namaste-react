import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems, setShowIndex})=>{
// const [showItems, setShowItems] = useState(false);    
const handleClick = ()=>{
    console.log("clicked");
    setShowIndex();
}
    return (
        <div className="flex justify-center">
            <div className="w-6/12 h-auto bg-slate-200 my-2  p-2 shadow-xl">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-sm font-bold">{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</span>
                    <span>^</span>
                </div>
                {/* if showItems is set to true then show ItemList, else hide  */}
                {showItems && <ItemList items={data?.card?.card?.itemCards}/>}
            </div>
        </div>
    )

}

export default RestaurantCategory;