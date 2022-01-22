import React from 'react';

import { connect } from 'react-redux';

import {CartAction} from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({ CartAction }) => (
  <div className='cart-icon' onClick={CartAction}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    CartAction: () => dispatch(CartAction())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);