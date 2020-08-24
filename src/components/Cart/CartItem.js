import React, { Component } from "react";
import { connect } from "react-redux";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { increase } from "../../actions/cart";

class CartItem extends Component {
  state = {
    count: 0,
    unitPrice: 0.0,
    total: 0.0,
  };

  addToCart = (type) => {
  };
  render() {
    const { count } = this.state;
    const { item } = this.props;
    return (
      <div>
        <div>
          <img alt="" src={item.image} width="150" height="150" />
          <h4>
            <strong>
              <span>{item.name}</span>
            </strong>
          </h4>
        </div>
        <div className="price">price</div>
        <div className="quantity"></div>
        <div className="quantity-modified">
          <Button>
            <PlusCircleOutlined
              onClick={() => this.addToCart("increase")}
              width={"20px"}
            />
          </Button>
          <span className="count">{count}</span>
          <Button>
            <MinusCircleOutlined width={"20px"} 
            onClick={() => this.addToCart("reduce")}
            />
          </Button>
          <Button>
            <DeleteOutlined width={"20px"} />
          </Button>
        </div>
        <div>Total: </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increase: (id) => dispatch(increase(id)),
});

export default connect(mapDispatchToProps)(CartItem);
