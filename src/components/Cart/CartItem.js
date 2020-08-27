import React, { Component } from "react";
import { connect } from "react-redux";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { increase } from "../../actions/cart";

import "./cart.css"

class CartItem extends Component {
  state = {
    count: 0,
    unitPrice: 0.0,
    total: 0.0,
  };

  addToCart = (type) => {};
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
              <Button>
                <DeleteOutlined width={"20px"} />
              </Button>
            </div>
          <div className="total"> Ksh{item.count * item.price}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increase: (id) => dispatch(increase(id)),
});

export default connect(mapDispatchToProps)(CartItem);
