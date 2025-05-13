import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
  
    const {name,cuisines, sla, areaName,cloudinaryImageId} = resData.info;
    return(
      <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300">
        <img className= "rounded-lg" src={RESTAURANT_IMAGE_URL +cloudinaryImageId }/>
        <h4 className="font-bold py-2 text-lg">{name}</h4>
        <div className="info">
        <div>{cuisines?.join(", ")}</div>
        <div>{areaName}</div>
        <div>{sla.deliveryTime} minutes</div>
        </div>
      </div>
    )
  }

  /* Below is an example of Higher Order Components. If we want to add the label as promoted to the restaurant where isPromoted flag is true, we use this higher order component instead of making change to the original component  */
/*Higher order components are functions which takes components and return enhanced component without making change to the actual component */
  export const WithPromoted = (RestaurantCard) => {
  return(props)=>{
    return(
      <div>
        <label className="">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
    
}

export default RestaurantCard;