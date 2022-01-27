import cartActionToggle from "./cart.type";

export const CartAction = () => ({
    type:cartActionToggle.TOGGLE_CART_HIDDEN
})
export const AddItem= (item) => ({
    type:cartActionToggle.ADD_ITEM,
    payload:item
})
export const RemoveItem = (item) => ({
    type:cartActionToggle.REMOVE_ITEM,
    payload:item
})
export const clearItemFromCart= (item) =>({
    type:cartActionToggle.CLEAR_ITEM_FROM_CART,
    payload:item
})
 