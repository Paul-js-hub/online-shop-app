import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from '../Cart/CartItem'

import { increase } from "../../actions/cart";
import { addToCart } from "../../actions/cart";


class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.items.length === 0 ? (
          <div>
            <h2>Cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2>You have {cart.items.length} in Cart</h2>
          </div>
        )}
        {cart.items.map((item) => {
          return (
            <CartItem 
            key={item.id}
            item={item}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (items) => dispatch(addToCart(items)),
  increase: (quantity) => dispatch(increase(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
