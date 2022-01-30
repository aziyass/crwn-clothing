import React from "react";
import './checkout.page.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItem , selectCartTotal } from "../../redux/cart/cart.selector";
import CheckOutItem from "../../component/checkOutItem/checkOut-Item.component";
import StripeCheckOutButton from "../../component/stripe-button/stripe-button.component";
const CheckOut=({cartItems,Total})=> (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=> 
               ( <CheckOutItem key={cartItem.id} cartItem={cartItem} />  )    
            )
        }
        <div className="total">
            <span> Total: ${Total} </span>
        </div>
        <StripeCheckOutButton price={Total} /> 
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItem,
    Total:selectCartTotal
})
export default connect(mapStateToProps)(CheckOut)