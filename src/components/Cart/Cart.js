import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../Cart/CartItem";
//import CartTotals from "../Cart/CartTotals";
import { Button } from "antd";

import { clearCart } from "../../actions/cart";

import "./cart.css";

class Cart extends Component {
  state = {
    count: 0,
    unitPrice: 0.0,
    total: 0.0,
  };

  render() {
    const { cart, clearCart } = this.props;
    return (
      <div>
        <h1>Cart</h1>
        {cart.items.length === 0 ? (
          <div className="cartEmptyContainer">
            <img
              src="https://toppng.com/public/uploads/preview/shopping-cart-sign-shopping-cart-empty-ico-11563228005rnccz3lvl0.png"
              alt=""
              width="150"
              height="150"
            />
            <h2 className="cart-empty-title">Your Cart is empty</h2>
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
            {/* <CartTotals /> */}
            <div className="cartClearTotalContainer">
            <Button onClick={ clearCart }>Clear Cart</Button>
          </div>
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
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
