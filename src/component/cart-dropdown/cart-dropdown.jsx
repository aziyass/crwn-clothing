import React from "react";
import CostumeButton from "../CostumeBotton/CostumeBotton";
import './cart-dropdown.scss'

const DropDownCart=()=> (
    <div className="cart-dropdown">
        <div className="cart-items" /> 
        <CostumeButton > Go To Checkout </CostumeButton>
    </div>
)
export default DropDownCart