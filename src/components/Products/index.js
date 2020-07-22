import React, { Component } from 'react';
import huawei from '../../images/huawei-ac.jpg';
import iphone from '../../images/iphone-11.jpg';
import samsunga30 from '../../images/Samsung-Galaxy-A30si.jpg';
import samsungs20 from '../../images/Samsung-galaxy-s20.jpg';
import tecno from '../../images/Tecno-Camon-15-Premier.jpg';

export class Products extends Component {
    render() {
        return (
            <div className="products-container">
                <div className="image">
                <img src ={huawei} alt="Huawei" width="250" height="250"/>
                <h3>Huawei-AC-SX569</h3>
                <h3>KSh 17,000</h3>
                <a href="#">ADD TO CART</a>
                </div>

                <div className="image">
                <img src ={iphone} alt="Iphone-11" width="250" height="250"/>
                <h3>Iphone-11</h3>
                <h3>KSh 75,000</h3>
                <a href="#">ADD TO CART</a>
                </div>

                <div className="image">
                <img src ={samsunga30} alt="Samsung A30" width="250" height="250"/>
                <h3>Samsung-Galaxy-A30si</h3>
                <h3>KSh 25,000</h3>
                <a href="#">ADD TO CART</a>
                </div>

                <div className="image">
                <img src ={samsungs20} alt="Samsung S20" width="250" height="250"/>
                <h3>Samsung-Galaxy-s20</h3>
                <h3>KSh 45,000</h3>
                <a href="#">ADD TO CART</a>
                </div>

                <div className="image">
                <img src ={tecno} alt="Tecno-Camon-15-Premier" width="250" height="250"/>
                <h3>Tecno-Camon-15-Premier</h3>
                <h3>KSh 17,000</h3>
                <a href="#">ADD TO CART</a>
                </div>
            </div>
            
        );
    }
}

export default Products;
