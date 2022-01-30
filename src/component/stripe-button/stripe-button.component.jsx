import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckOutButton = ({price})=> {
    const priceForStripe = price*100
    const publishabelKey='pk_test_51KNb2SChASzxt2jZrE6g1P4p6gUBivMS02J3NnJYsble6WQuvZGqsvMPzONvdjPRLIWmbN7YYmyj44rHyhDtlaPl00KvYiG4gh'

    const OnToken=token=> {
        console.log(token);
        alert('payement succed')
    }

    return(
        <StripeCheckout
            label="pay now"
            name="crwn clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`the price is $${price}`}
            amount={priceForStripe}
            token={OnToken}
            stripeKey={publishabelKey}
        /> 
    )
}   
export default StripeCheckOutButton