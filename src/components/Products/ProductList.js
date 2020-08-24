import React, { Component } from "react";
import { connect } from "react-redux";

import Product from '../Products/Product'
import { addToCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";


import "./products.css";

class ProductList extends Component {
  state = {
    products:[]
  }
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts({});
  }

  getItem = (id) =>{
    const { products } = this.state;
    const product = products.find(item => item.id === id);
    return product;
  }

  handleAddToCart = (product) => {
    const { addToCart, cart } = this.props;
    const items = cart.items.slice();
    items.push(product)
    addToCart({items});
  };

  render() {
    const { products } = this.props;
    return (
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product 
            product ={product}
            handleAddToCart = {this.handleAddToCart}
            key = {product.id}
            inCart = {this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 }
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
