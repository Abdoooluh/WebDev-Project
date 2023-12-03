import React from 'react';
import { Row, Col, Avatar, Typography } from 'antd';

const { Title } = Typography;

const DevTeam = () => {

    const developers = [
        { name: 'Fahad Waseem', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png' },
        { name: 'Muhammad Abdullah', imageUrl: 'https://cdn-icons-png.flaticon.com/512/3445/3445053.png' },
        { name: 'Maira Shafiq', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2784/2784481.png' },
      ];
      
  return (
    <>
      {/* Title for the list of developers */}
      <Row gutter={16} justify="center" style={{ marginTop: '50px' }}>
        <Col span={24}>
          <Title level={3} style={{ textAlign: 'center' }}>
            Our Development Team
          </Title>
        </Col>
      </Row>

      {/* Avatars and names for developers */}
      <Row gutter={16} justify="center" style={{ marginTop: '40px' }}>
        {developers.map((developer, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <Avatar size={128} src={developer.imageUrl} />
              <p style={{ marginTop: '10px' }}>{developer.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DevTeam;
