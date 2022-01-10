import React from "react";
import './CostumeBotton.scss'

function CostumeButton({ children, googlesignin, ...otherProps }) {
    var condiction=googlesignin ? 'googlesign-in' : ' '
    var singnincondition=  condiction +' custom-button'  ;
    return (
            <button className={ singnincondition} {...otherProps}>
                {children}
            </button>
    )
}

export default CostumeButton