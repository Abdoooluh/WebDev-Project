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
                        <Title level={4}>Saifullah Tanvir</Title>
                        <Paragraph>
                            "I had never thought that a website created as part of my web programming course
                            could make such a meaningful impact. Witnessing the project, which was initially an academic endeavor,
                            turn into a lifesaver is truly gratifying. It's a testament to the potential of technology and the skills
                            our students acquire. I'm proud to have guided a team that created something so impactful. Kudos to the team!"
                        </Paragraph>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Rate disabled defaultValue={5} />
                        <Title level={4}>Dr. John Watson</Title>
                        <Paragraph>
                            "In the midst of solving cases with Sherlock Holmes, he encountered an unexpected injury.
                            Desperate for skilled medical attention, I discovered ScoutMD, and within minutes,
                            we found a doctor perfectly suited for Sherlock's unique case. Thanks to ScoutMD,
                            Sherlock and I are back to our regular adventures at crime scenes!"
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

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Rate disabled defaultValue={5} />
                        <Title level={4}>Robert Downey Jr.</Title>
                        <Paragraph>
                            "After facing the challenges of battling Thanos, I realized the importance of having a skilled doctor by my side.
                            ScoutMD came to my rescue, helping me find a doctor with the expertise needed for superhero recovery.
                            Now, with the right medical support, I'm ready for whatever challenges the universe throws at me!"
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
