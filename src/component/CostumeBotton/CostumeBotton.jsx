import React from "react";
import './CostumeBotton.scss'
const CostumeButton=({children,...otherProps})=> (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)
export default CostumeButton