import React, { Component } from "react";
import { Card } from "antd";
import { Button } from "antd";

import "./products.css";
const { Meta } = Card;

class Products extends Component {
  state = {
    products: [
      {
        name: "Huawei-Nova-7i",
        price: "KSh 17,000",
        image:
          "https://www.gizmochina.com/wp-content/uploads/2020/01/nova-7i.jpg",
      },
      {
        name: "Iphone-11",
        price: "KSh 75,000",
        image:
          "https://www.techinn.com/f/13735/137354158/apple-iphone-11-128gb-6.1.jpg",
      },
      {
        name: "Samsung-Galaxy-A30si",
        price: "KSh 25,000",
        image:
          "https://www.brightonline.co.ke/wp-content/uploads/2019/05/Samsung-Galaxy-A30si.jpg",
      },
      {
        name: "Samsung-Galaxy-s20",
        price: "KSh 45,000",
        image:
          "https://www.powerplanetonline.com/cdnassets/samsung_galaxy_s20_g980_4g_cloud_blue_04_ad_l.jpg",
      },
      {
        name: "Tecno-Camon-15-Premier",
        price: "KSh 35,000",
        image:
          "https://www.phoneplacekenya.com/wp-content/uploads/2020/05/Tecno-Camon-15-Premier.jpg",
      },
    ],
    quantity: 0,
  };

  addToCart = (quantity) => {
    console.log("Item added to cart");
    this.setState({ quantity: this.state.quantity + 1 });
  };

  render() {
    const { products, quantity } = this.state;
    return (
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <div className="product-image" key={index}>
              <Card
                style={{ width: 250 }}
                cover={<img alt="example" src={product.image} />}
              >
                <Meta title={product.name} description={product.price} />
                <Button type="primary" onClick={this.addToCart} block>
                  ADD TO CART
                </Button>
                <p>You have clicked {quantity} times</p>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
