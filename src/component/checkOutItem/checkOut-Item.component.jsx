import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.action";
import './checkOut-Item.component.scss'
const CheckOutItem=({ cartItem , clearItem })=> {
    const  {name,imageUrl,quantity,price} = cartItem ;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Item" />
        </div>
        <span className="name"> {name} </span>
        <span className="quantity"> {quantity} </span>
        <span className="price"> {price} </span>
        <div className="remove-button" onClick={()=> clearItem(cartItem)}>
            &#10134;
        </div>
    </div>
)}
const mapDispatchToProps=dispatch => ({
    clearItem: Item => dispatch (clearItemFromCart(Item))
});
export default connect(null,mapDispatchToProps)(CheckOutItem)