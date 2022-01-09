import React from "react";

import './collection-item.scss'

function Citem({id,name,price,imageUrl}){
    var style_item ={ backgroundImage: "url(" +  imageUrl  + ")"} 
    return(
        <div className="collection-item" >
            <div className="image" style={style_item} />
            <div className="collection-footer">
                <span className="name" > {name} </span>
                <span className="price" > {price} </span>
            </div> 
        </div>
    )
}
export default Citem