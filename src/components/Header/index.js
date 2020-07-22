import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify/icons-ant-design/shopping-cart-outlined';

import './header.css'

const { Header } = Layout;


const NavHeader = () => (
    <Layout className="layout">
    <Header>
      <div className="logo">
        <h2>SHOP</h2>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Products</Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
        <Menu.Item key="3" className="cart"><Icon icon={shoppingCartOutlined} /> Cart <span>0</span> </Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default NavHeader;