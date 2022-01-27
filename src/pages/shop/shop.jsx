import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SelectCollection from "../../redux/shop/shop.selector";
import Collection from "../../component/collection-component/collection-component";
const Shop = ({ collections }) => (
    <div>
        {collections.map(({ id, ...otherCollectionprops }) =>
            (<Collection key={id} {...otherCollectionprops} />)
        )}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: SelectCollection
})


export default connect(mapStateToProps)(Shop) 