import cartActionToggle from "./cart.type";

export const CartAction = ()=> ({
    type:cartActionToggle.TOGGLE_CART_HIDDEN
})
export const AddItem=(item)=> ({
    type:cartActionToggle.ADD_ITEM,
    payload:item
})
 