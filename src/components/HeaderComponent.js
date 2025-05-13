import { useContext, useState } from "react";
import Logo from "../../images/logo.jpg";
import{Link} from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () =>{
  const [buttonText,setButtonText] = useState("Login");
  const {loggedInUser} = useContext(UserContext);

// subscribing to the store using a Selector
// whenever the state changes, this component will re-render
  const cartItems = useSelector((store)=>store.cart.items);
  return (
      <div className="flex justify-between shadow-lg m-2 bg-slate-100">
        <div className="logo-container">
          <img className="w-24" src={Logo}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/cart">Cart - {cartItems.length} Items</Link></li>
          <button onClick={()=>{
              setButtonText(buttonText == "Login" ? "Logout":"Login");
          }}>{buttonText}</button>
          <li> User: {loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

export default HeaderComponent;