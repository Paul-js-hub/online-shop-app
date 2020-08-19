import React, { Component } from "react";
import { connect } from "react-redux";

import Product from '../Products/Product'
import { addToCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";


import "./products.css";

class ProductList extends Component {

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts({});
  }


  handleAddToCart = (product) => {
    console.log('PRODUCT: ', product)
    const { addToCart, cart } = this.props;
    const items = cart.items.slice();
    items.push(product)
    addToCart({items});
  };

  render() {
    const { products } = this.props;
    return (
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <Product 
            product ={product}
            handleAddToCart = {this.handleAddToCart}
            key = {index}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = ({products, cart}) =>({
    products: products.data,
    cart
});

const mapDispatchToProps = (dispatch) => ({
  //explicitly forwarding arguments
  addToCart: (items) => dispatch(addToCart(items)),
  getProducts: (products) => dispatch(getProducts(products.data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
