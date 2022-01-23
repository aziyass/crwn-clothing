import React from "react";
import './CostumeBotton.scss'

function CostumeButton({ children, googlesignin, inverted , ...otherProps }) {
    return (
            <button className={ `${inverted ? 'inverted' : ' ' } 
            ${googlesignin ? 'googlesign-in' : ' '} custom-button`} {...otherProps}>
                {children}
            </button>
    )
}

export default CostumeButton