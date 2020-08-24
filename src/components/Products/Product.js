import React, { Component } from "react";

import { Card } from "antd";
import { Button } from "antd";

const { Meta } = Card;

class Product extends Component {
  state = {
    inCart: this.props.inCart
  };
  handleAddToCart = (e) => {
    e.preventDefault();
    const { handleAddToCart, product } = this.props;
    handleAddToCart(product);
    this.setState({
      inCart: true,
    });
  };
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="product-image">
          <Card
            style={{ width: 250 }}
            cover={<img alt="example" src={product.image} />}
          >
            <Meta title={product.name} description={product.price} />
            <Button
              type="primary"
              disabled={this.state.inCart ? true : false}
              onClick={this.handleAddToCart}
              block
            >
              {this.state.inCart ? "INCART" : "ADD TO CART"}
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default Product;
