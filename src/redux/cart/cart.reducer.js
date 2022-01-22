import  cartActionToggle  from "./cart.type";

const Initialeze_Cart={
    hidden : true
}

const CartReducer = (state= Initialeze_Cart , action)=> {
    switch (action.type) {
        case cartActionToggle.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden : !state.hidden
            }
        default:
            return(state)
    }
}   
export default CartReducer