import React, { Component } from "react";

import { Card } from "antd";
import { Button } from "antd";

const { Meta } = Card;

class Product extends Component {
  handleAddToCart = () => {
    const { handleAddToCart, product } = this.props;
    handleAddToCart(product);
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
            <Button type="primary" onClick={this.handleAddToCart} block>
              ADD TO CART
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default Product;
