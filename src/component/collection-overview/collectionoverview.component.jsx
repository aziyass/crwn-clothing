import React from "react";
import './collectionoverview.style.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {SelectCollectionForPreview} from "../../redux/shop/shop.selector";
import Collection from "../../component/collection-component/collection-component";

const CollectionOverView = ({ collections })=> (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionprops }) =>
            (<Collection key={id} {...otherCollectionprops} />)
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: SelectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverView)