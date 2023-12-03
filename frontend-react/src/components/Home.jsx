import React from 'react';
import DevTeam from './DevTeam';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
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
      <DevTeam />
    </div>
  );
};

export default Home;
