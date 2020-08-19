import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button } from "antd"
import { increase } from "../../actions/cart"

class CartItem extends Component {
    render() {
        const {item} = this.props
        return (
            <div>
                <h3>Cart Items</h3>
                <div>
                    <img 
                    alt = ""
                    src = {item.image}
                    width = "150"
                    height = "150"
                    />
                    <h4><strong><span>{item.product.name}</span></strong></h4>
                </div>
                <div className="price">price</div>
                <div className="quantity"></div>
                <div className="quantity-modified">
                <Button><PlusCircleOutlined 
                onClick = {(quantity) => increase(this.props.quantity)}
                width={"20px"}/></Button>
                <Button><MinusCircleOutlined width={"20px"}/></Button>
                <Button><DeleteOutlined width={"20px"}/></Button>
                </div>
                <div>Total: </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    increase: quantity => dispatch(increase(quantity))
})


export default connect(mapDispatchToProps)(CartItem)