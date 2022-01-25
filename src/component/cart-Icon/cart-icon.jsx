import React from 'react';

import { connect } from 'react-redux';
import {selectCartItemCount} from '../../redux/cart/cart.selector'
import {CartAction} from "../../redux/cart/cart.action";
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({ CartAction , itemCount }) => (
  <div className='cart-icon' onClick={CartAction}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> {itemCount} </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    CartAction: () => dispatch(CartAction())
});

const mapStateToProps=createStructuredSelector ({
  itemCount : selectCartItemCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);