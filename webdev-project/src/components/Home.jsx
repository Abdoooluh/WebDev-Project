import React from 'react';
import { Typography, Row, Col, Card, Avatar } from 'antd';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const developers = [
    { name: 'Fahad Waseem', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png' },
    { name: 'Muhammad Abdullah', imageUrl: 'https://cdn-icons-png.flaticon.com/512/3445/3445053.png' },
    { name: 'Maira Shafiq', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2784/2784481.png' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="text">
            <Title level={2}>Book Appointments with healthcare specialists with ease</Title>
            <Paragraph style={{ fontSize: '2rem' }}>
              Access to appointments with top healthcare specialists from all around Pakistan with ease.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="image">
            <Card>
              <img
                src="https://assets.aboutamazon.com/dims4/default/0305b38/2147483647/strip/true/crop/1919x1080+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F21%2Fd3%2F171c031b4871a367060f2b974a59%2Fhealth-hero-1.jpg"
                alt="HealthCare"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Card>
          </div>
        </Col>
      </Row>

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
    </div>
  );
};

export default Dashboard;
