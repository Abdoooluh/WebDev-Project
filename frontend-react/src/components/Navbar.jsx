import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    DashboardOutlined,
    InfoCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';

const Navbar = () => {
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home" style={{ float: 'left' }}>
                <Link to="/">ScoutMD</Link>
            </Menu.Item>
            <Menu.Item key="booking" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="search" icon={<HomeOutlined />}>
                <Link to="/search">Search Doctor</Link>
            </Menu.Item>
            <Menu.Item key="aboutus" icon={<InfoCircleOutlined />} style={{ float: 'right' }}>
            <Link to="/aboutus">About Us</Link>
            </Menu.Item>
            <Menu.Item key="signup" icon={<UserOutlined />} style={{ float: 'right' }}>
            <Link to="/userprofile">User Profile</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
