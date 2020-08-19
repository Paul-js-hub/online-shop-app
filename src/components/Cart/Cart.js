import React, { Component } from 'react'
import { connect } from 'react-redux'
//import CartItem from '../Cart/CartItem'

class Cart extends Component {
    render() {
        const {cart} = this.props;
        return(
            <div>
                {cart.items.length === 0 ?(
                    <div><h2>Cart is empty</h2></div>
                ) : (
                    <div>
                        <h2>You have { cart.items.length } in Cart</h2>
                    </div>
                )}
                {
                    cart.items.map((item) =>{
                        return(
                            <div></div>
                        )
                    })
                }
            </div>
        )
       
    }
}

const mapStateToProps = ({cart}) =>({
    cart
})

export default connect(mapStateToProps)(Cart)
