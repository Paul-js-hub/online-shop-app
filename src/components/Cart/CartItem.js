import React from 'react'
import { connect } from "react-redux"
import { addToCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";

const CartItem = ({products}) =>{
    console.log('PRODUCTS: ', products)
    return (
        <div>
           
        </div>
    )
}

const mapStateToProps = ({products}) =>({
    products: products.data,
});


const mapDispatchToProps = (dispatch) => ({
    //explicitly forwarding arguments
    addToCart: (items) => dispatch(addToCart(items)),
    getProducts: (products) => dispatch(getProducts(products.data)),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)