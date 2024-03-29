import  cartActionToggle  from "./cart.type";
import { addItemToCart , removeItemFromCart } from "./cart.util";
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
        case cartActionToggle.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    cartItem=> cartItem.id != action.payload.id
                )
            }
        case cartActionToggle.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return(state)
    }
}   
export default CartReducer