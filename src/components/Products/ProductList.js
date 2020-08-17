import React, { Component } from "react";
import { connect } from "react-redux";

import Product from '../Products/Product'
import { addToCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";


import "./products.css";



class ProductList extends Component {
  state = {
    products: [],
    cart: {
      items: [],
    },
  };

  componentDidMount() {
    const { getProducts, products } = this.props;
    getProducts({});

    if(this.state.products.length === 0){
      this.setState({products:products})
    }
  }


  handleAddToCart = (item) => {
    const { addToCart } = this.props;
    const { cart } = this.state;
    const items = cart.items.slice();
    items.push(item);
    this.setState({ cart: { items: items } });
    addToCart(cart);
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
const mapStateToProps = ({products}) =>({
    products: products.data,
});

const mapDispatchToProps = (dispatch) => ({
  //explicitly forwarding arguments
  addToCart: (items) => dispatch(addToCart(items)),
  getProducts: (products) => dispatch(getProducts(products.data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
