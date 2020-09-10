import React, { Component } from "react";
import { connect } from "react-redux";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { removeFromCart, increase, decrease } from "../../actions/cart";

import "./cart.css";

class CartItem extends Component {
  handleRemove = (e) => {
    const { removeFromCart, item } = this.props;
    removeFromCart(item.id);
  };

  handleIncrease = () =>{
    const { increase, item } = this.props;
    increase(item.id);
  }

  handleDecrease = () =>{
    const { decrease, item } = this.props;
    decrease(item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="container-products">
        <div className="products">
          <div className="product">
            <img alt="" src={item.image} width="150" height="150" />
            <h4>
              <span className="sm-hide">{item.name}</span>
            </h4>
          </div>
          <div className="price">Ksh{item.price}</div>
          <div className="quantity">
              <PlusCircleOutlined
                onClick={this.handleIncrease}
                width={"20px"}
              />
            <span className="count">{item.count}</span>
              <MinusCircleOutlined
                width={"20px"}
                onClick={this.handleDecrease}
              />
          </div>
          <div className="remove">
              <DeleteOutlined width={"20px"} onClick={this.handleRemove} />
          </div>
          <div className="total"> Ksh{item.count * item.price}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increase: (id) => dispatch(increase(id)),
  decrease: (id) => dispatch(decrease(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
