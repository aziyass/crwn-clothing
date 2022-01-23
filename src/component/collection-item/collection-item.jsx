import React from "react";
import CostumeButton from "../CostumeBotton/CostumeBotton";
import './collection-item.scss'
import {connect} from 'react-redux'

import {AddItem} from '../../redux/cart/cart.action'

const Citem=({item,AddItem}) => {
    const {name,price,imageUrl}=item;
    return(
        <div className="collection-item" >
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />            
            <div className="collection-footer">
                <span className="name" > {name} </span>
                <span className="price" > {price} </span>
            </div> 
            <CostumeButton onClick={()=> AddItem(item)}  inverted > add to card </CostumeButton>
        </div>
    )
}
const mapDispatchToProps=dispatch=> ({
    AddItem : item => dispatch(AddItem(item))
})

export default  connect ( null,mapDispatchToProps) (Citem)