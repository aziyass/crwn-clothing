import React from "react";
import CostumeButton from "../CostumeBotton/CostumeBotton";
import './cart-dropdown.scss'
import {connect} from 'react-redux'
import CartItem from "../cart-item.component/cart-item.component";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {selectCartItem} from '../../redux/cart/cart.selector'
import {CartAction} from '../../redux/cart/cart.action'
const DropDownCart=({cartItems , history,dispatch})=> {
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {   cartItems.length ?
                cartItems.map(cartItem =>(<CartItem key={cartItem.id}  Item={cartItem} /> )) :
                (<span className="empty-message">your cart is empty</span>)
            }
        </div> 
        <CostumeButton 
        onClick={()=> {history.push('/checkout'); dispatch(CartAction())} }
         > Go To Checkout </CostumeButton>
    </div>
)}
const mapStateToProps=createStructuredSelector ({
    cartItems:selectCartItem
})
export default  withRouter(connect(mapStateToProps)(DropDownCart)) 