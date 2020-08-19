import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import { Icon } from "@iconify/react";
import shoppingCartOutlined from "@iconify/icons-ant-design/shopping-cart-outlined";
import { Link } from "react-router-dom";
import "./header.css";
import "antd/dist/antd.css";

const { Header } = Layout;

class NavHeader extends Component {
  render() {
    const { cart } = this.props;
    const count = cart.items.length;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <h2>SHOP</h2>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1"><Link to="/">Products</Link></Menu.Item>
    <Menu.Item key="2" className="cart"><Icon icon={shoppingCartOutlined} /><Link to ='/cart'>Cart <span>{count} {""}</span> </Link></Menu.Item>
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
