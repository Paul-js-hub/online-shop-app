import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Icon } from "@iconify/react";
import shoppingCartOutlined from "@iconify/icons-ant-design/shopping-cart-outlined";

import "./header.css";

const { Header } = Layout;

class NavHeader extends Component {
  render() {
    const { cart } = this.props;
    const count = cart.basketNumbers;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <h2>SHOP</h2>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Products</Menu.Item>
            <Menu.Item key="2">Login</Menu.Item>
            <Menu.Item key="3" className="cart">
              <Icon icon={shoppingCartOutlined} /> Cart <span>{count}</span>{" "}
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(NavHeader);
