import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="logo" style={{ float: 'left' }}>
        ScoutMD
      </Menu.Item>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Doctor Search
      </Menu.Item>
      <Menu.Item key="booking" icon={<CalendarOutlined />}>
        My Appointments
      </Menu.Item>
      <Menu.Item key="login" icon={<InfoCircleOutlined />} style={{ float: 'right' }}>
        About Us
      </Menu.Item>
      <Menu.Item key="signup" icon={<UserOutlined />} style={{ float: 'right' }}>
        User Profile
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
