import React, { Component } from "react";
import { connect } from "react-redux";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { removeFromCart} from "../../actions/cart";

import "./cart.css"

class CartItem extends Component {

  handleRemove = (e) => {
    const { removeFromCart, item } = this.props
    removeFromCart(item.id);
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
            <Button>
              <PlusCircleOutlined
                onClick={() => this.addToCart("increase")}
                width={"20px"}
              />
            </Button>
            <span className="count">{item.count}</span>
            <Button>
              <MinusCircleOutlined
                width={"20px"}
                onClick={() => this.addToCart("reduce")}
              />
            </Button>
          </div>
          <div className="remove">
                <DeleteOutlined width={"20px"} 
                onClick ={this.handleRemove}
                />
            </div>
          <div className="total"> Ksh{item.count * item.price}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // increase: (id) => dispatch(increase(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id))
  
});


export default connect(null, mapDispatchToProps)(CartItem);
