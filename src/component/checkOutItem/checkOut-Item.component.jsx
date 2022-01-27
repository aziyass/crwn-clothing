import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart,AddItem,RemoveItem} from "../../redux/cart/cart.action";
import './checkOut-Item.component.scss'
const CheckOutItem = ({ cartItem, clearItem,AddItem, RemoveItem}) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
                <div className="arrow" onClick={()=> RemoveItem(cartItem)} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> AddItem(cartItem)} >&#10095;</div>
            </span>
            <span className="price"> {price} </span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                &#10134;
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: Item => dispatch(clearItemFromCart(Item)),
    AddItem:Item=> dispatch(AddItem(Item)),
    RemoveItem:Item=> dispatch(RemoveItem(Item))
});
export default connect(null, mapDispatchToProps)(CheckOutItem)