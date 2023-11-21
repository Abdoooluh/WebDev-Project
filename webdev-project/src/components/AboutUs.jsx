import React from 'react';
import DevTeam from './DevTeam';
import { Typography, Rate, Divider, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Title>About ScoutMD</Title>
            <Paragraph>
                ScoutMD is dedicated to providing a seamless experience in finding the right doctors for your needs.
                Our mission is to make healthcare accessible and efficient for everyone.
            </Paragraph>

            <Divider />

            <Title level={2}>What Our Users Say</Title>

            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Rate disabled defaultValue={5} />
                        <Title level={4}>Dr. John Doe</Title>
                        <Paragraph>"ScoutMD made it easy for me to find a specialist for my condition. Excellent service!"</Paragraph>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Rate disabled defaultValue={5} />
                        <Title level={4}>Dr Juniper</Title>
                        <Paragraph>
                            "The appointment booking feature is fantastic! I could quickly schedule a visit with my preferred doctor."
                        </Paragraph>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Rate disabled defaultValue={5} />
                        <Title level={4}>Jane Smith</Title>
                        <Paragraph>
                            "The ease of use is amazing. I could find the perfect appointment for me in minutes"
                        </Paragraph>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Rate disabled defaultValue={5} />
                        <Title level={4}>Dr. Strange</Title>
                        <Paragraph>
                            "While navigating through the mystical realms, I stumbled upon ScoutMD—a portal of unparalleled convenience!
                            Now, even in the chaos of the multiverse, I can quickly schedule appointments with healthcare specialists.
                            Truly, a wizard's dream come true! Adding it to my timeline for all realms."
                        </Paragraph>
                    </div>
                </Col>

            </Row>

            {/* Add more fake reviews as needed */}

            <Divider />

            <DevTeam />
        </div>
    );
};

export default AboutUs;
