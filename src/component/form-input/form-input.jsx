import React from "react";
import './form-input.scss'

function Forminput({ handelChange, label, ...otherprops }) {
    var cn='${'+otherprops.value.length+' ? "shrink" : ""} form-input-label ';
    return (
        <div className="group" >
            <input className="form-input" onChange={handelChange} {...otherprops} />
            {
                label ?
                    (<label className={cn} > {label} </label>)
                    : null
            }
        </div>
    )
}

export default Forminput