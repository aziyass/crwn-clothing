import React from "react";
import './collection-component.scss'
import Citem from "../collection-item/collection-item";

const Collection=({title,items})=> (
    <div className="collection-preview" >
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className="preview">
            {items
            .filter((item,idx)=> idx<4)
            .map( item => (
                <Citem key={item.id} item={item} /> 
            ))}
        </div>
    </div>
)
export default Collection