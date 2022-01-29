import React from "react";
import './collection.page.scss'
import { connect } from "react-redux";
import { CollectionSelector } from "../../redux/shop/shop.selector";
import Citem from '../../component/collection-item/collection-item'
const CollectionPage = ({ collection }) => {
    const {title,items} = collection
    return (
      <div className='collection-page'>
        <h2 className="title"> {title} </h2>
        <div className="items">
          {
            items.map(item=> <Citem key={item.id} item={item} /> )
          }
        </div>
      </div>
    );
  };
const mapStateToProps = (state,ownprops)=> ({
    collection : CollectionSelector(ownprops.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage) 