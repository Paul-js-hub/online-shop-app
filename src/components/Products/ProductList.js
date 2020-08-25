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

  handleAddToCart = (product) => {
    const { addToCart, cart } = this.props;
    const items = cart.items.slice();
    const index = items.findIndex((item)=> item.id === product.id)
    if(index > -1){
      const count = items[index].count + 1
      items[index] = {...items[index], count}
    } else{
      items.push({...product, count: 1})
    }
    
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
            //inCart = {this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 }
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
