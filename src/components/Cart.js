import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    /* when you subscribe to the store, make sure you are subscripting to the right slice of the store, 
    if you get the whole store object here, the performance will be impacted.*/
    const cartItems = useSelector((store) => store.cart.items); 
    const dispatch = useDispatch();
    const handleClearCart = () => {
         dispatch(clearCart());
    }
    return(
        <div>
    <div className="text-center p-4 m-4">
        <div className="p-2 m-2">Cart</div><button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button></div>
    <div className="text-center p-4 m-4">
        {cartItems.length === 0 ? <h1>Cart is Empty. Add items to cart!</h1> : 
        <ItemList items={cartItems}/>}
    </div>
    </div>
    )
}

export default Cart;