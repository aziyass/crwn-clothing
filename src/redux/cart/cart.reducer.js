import  cartActionToggle  from "./cart.type";
import { addItemToCart } from "./cart.util";
const Initialeze_Cart={
    hidden : true
    ,cartItems:[]
}

const CartReducer = (state= Initialeze_Cart , action)=> {
    switch (action.type) {
        case cartActionToggle.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden : !state.hidden
            }
        case cartActionToggle.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        default:
            return(state)
    }
}   
export default CartReducer