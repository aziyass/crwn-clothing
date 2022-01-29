import { createSelector } from "reselect";
import memoize from 'lodash.memoize'
const selectShop = state => state.shop

const SelectCollection=createSelector(
    [selectShop],
    shop=> shop.collections
);

export const SelectCollectionForPreview=createSelector(
    [SelectCollection],
    collections=> Object.keys(collections).map(key=> collections[key])
);

export const CollectionSelector = memoize( (CollectionUrlParams) => createSelector(
    [SelectCollection],
    Collections=> Collections[CollectionUrlParams]
));

export default SelectCollection