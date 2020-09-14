import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { Button } from "antd";
import { clearCart } from "../../actions/cart";

import "./cart.css";

class Cart extends Component {
  render() {
    const { cart, clearCart } = this.props;
    console.log("CART >>>", cart);
    let total = 0;
    cart.items.map((item) => {
      return (total = total + item.price * item.count);
    });
    return (
      <div className="cart">
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

            <div className="cartTotal">
              <h4>Total: Ksh {total}</h4>
            </div>
            <div className="optionsCart">
            <div className="optionsCartButtons">
              <Link to = '/'>
              <Button type="primary" >
                CONTINUE SHOPPING
              </Button>
              </Link>
            </div>
            <div className="optionsCartButtons">
              <Button type="primary" onClick={clearCart}>
                CLEAR CART
              </Button>
            </div>
            <div className="optionsCartButtons">
              <Button type="primary" >
                PROCEED TO CHECKOUT
              </Button>
            </div>
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
