import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem =>(
        <CartItem key={cartItem.id} item={cartItem}/>
      )

      )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state =>({
  cartItems : selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));