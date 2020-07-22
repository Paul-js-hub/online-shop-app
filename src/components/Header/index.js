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
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Login</Menu.Item>
        <Menu.Item key="2" ><Icon icon={shoppingCartOutlined} /> Cart </Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default NavHeader;