import React from "react";
import CollectionOverView from '../../component/collection-overview/collectionoverview.component'
import { Route } from 'react-router-dom'
import CollectionPage from "../collection/collection.page";

const Shop = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default Shop