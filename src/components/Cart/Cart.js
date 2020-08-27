import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../Cart/CartItem";

import { increase } from "../../actions/cart";
import { addToCart } from "../../actions/cart";

import "./cart.css"

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
            <div className="product-header">
              <div className="product-title">PRODUCT</div>
              <div className="price">PRICE</div>
              <div className="quantity">QUANTITY</div>
              <div className="remove">REMOVE</div>
              <div className="total">TOTAL</div>
            </div>
            {cart.items.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
        )}
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
