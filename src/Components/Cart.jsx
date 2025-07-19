import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../Utilities/CartSlice"
import ItemCards from "./ItemCards"





const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="CartMain">
            <div className="Mycart">
                <h1>My Cart({cartItems.length})</h1>
            </div>
            <div className="ClearCart2">
                <button className="ClearCart" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="CartItems">

                <ItemCards items={cartItems} /></div>
                {/* {cartItems.length == 0 && <img src={Cartimg} alt="No Items Added"/>} */}
        
        </div>
    )
}

export default Cart