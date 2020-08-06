import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";
import { Card } from "antd";
import { Button } from "antd";

import "./products.css";

const { Meta } = Card;

class Products extends Component {
  state = {
    products: [],
    cart: {
      items: [],
    },
  };

  componentDidMount(props) {
    console.log('PROPS:', props)
    const { getProducts } = this.props;
    getProducts({});
  }

  componentDidUpdate() {
    const { products } = this.props;
    this.setState({ products: products });
  }

  handleAddToCart = (product) => {
    const { addToCart } = this.props;
    const { cart } = this.state;
    const products = cart.items.slice();
    products.push(product);
    this.setState({ cart: { items: products } });
    addToCart(cart);
  };

  render() {
    const { products } = this.state;
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
                <Button
                  type="primary"
                  onClick={() => this.handleAddToCart(product)}
                  block
                >
                  ADD TO CART
                </Button>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    products: state.data,
  }
};

const mapDispatchToProps = (dispatch) => ({
  //explicitly forwarding arguments
  addToCart: (items) => dispatch(addToCart(items)),
  getProducts: (products) => dispatch(getProducts(products.data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
