import React from "react";
import CostumeButton from "../CostumeBotton/CostumeBotton";
import './cart-dropdown.scss'
import {connect} from 'react-redux'
import CartItem from "../cart-item.component/cart-item.component";

const DropDownCart=({cartItems})=> (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem =>(<CartItem key={cartItem.id}  Item={cartItem} /> ))
            }
        </div> 
        <CostumeButton > Go To Checkout </CostumeButton>
    </div>
)
const mapStateToProps=({cart:{cartItems}})=> ({
    cartItems
})
export default connect(mapStateToProps)(DropDownCart) 