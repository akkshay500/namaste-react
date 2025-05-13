import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{

console.log("item list");
console.log(items);

const dispatch = useDispatch();
const handleAddItem = (item) => {
    // dispatch(addItem("Burger")); // this will add the item to the cart
    // you don't need to pass the item in the payload, adding the item in the payload will be taken care by the reducer and it will be recieved in the payload in cartSlice.js.
    dispatch(addItem(item));
};

    return(
        /* use callback function 
                DO NOT USE onClick={handleAddItem(item)}, if you use this, it means you are calling the function right away.
                We dont have to call it right away but in the callback function. Always use the below one */
        <div>
            {items.map(item=> (
                <div className="flex justify-center">
                <div className="text-left border-b-2 border-gray-300 m-2 p-2 w-9/12">
                    <span className="text-sm">{item?.card?.info?.name}</span>
                    <span className="text-sm"> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                    <div className="py-2">
                        <p className="text-xs italic">{item?.card?.info?.description}</p>
                    </div>
                </div>            
                <div className="w-3/12 p-2 m-2">
                <div className="bg-lime-400 align-bottom text-center w-20"><button className="" onClick={()=> handleAddItem(item)}>+ Add</button></div>
                    <img className="h-32 w-40" src={RESTAURANT_IMAGE_URL + item?.card?.info?.imageId}/>
                </div>
                </div>
            ))}
            
        </div>
    ) 
}

export default ItemList;