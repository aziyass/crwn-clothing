
import { createSelector } from "reselect";

const selectShop = state => state.shop

const SelectCollection=createSelector(
    [selectShop],
    shop=> shop.collections
)

export default SelectCollection