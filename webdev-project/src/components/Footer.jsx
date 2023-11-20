import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white', padding: '20px 0' }}>
      <Row gutter={16} justify="center">
        <Col span={8}>
          <h3>Contact Us</h3>
          <p style={{ padding: '0 20px' }}>Email: help@scoutmd.com</p>
          <p style={{ padding: '0 20px' }}>Phone: +923000000000</p>
        </Col>
        <Col span={8}>
          <h3>Follow Us</h3>
          <div style={{ padding: '0 20px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: '24px', color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: '24px', color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://github.com/Abdoooluh/WebDev-Project" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '24px', color: 'white', margin: '0 10px' }} />
            </a>
          </div>
        </Col>
        <Col span={8}>
          <h3>About Us</h3>
          <p style={{ padding: '0 20px' }}>
            This website is created as a part of the Web Programming course instructed by Mr. Saifullah Tanvir at FAST National University of Computing and Emerging Sciences.
          </p>
        </Col>
      </Row>
      <p style={{ marginTop: '20px' }}>© 2023 ScoutMD. All rights reserved.</p>
    </Footer>
  );
};

export default CustomFooter;
