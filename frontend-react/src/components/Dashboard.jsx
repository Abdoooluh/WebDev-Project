import React from 'react';
import { Layout, Table, Card, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout;

const columns = [
  {
    title: 'Doctor Name',
    dataIndex: 'doctorName',
    key: 'doctorName',
  },
  {
    title: 'Specialization',
    dataIndex: 'specialization',
    key: 'specialization',
  },
  {
    title: 'Appointment Date',
    dataIndex: 'appointmentDate',
    key: 'appointmentDate',
  },
];

const data = [
  {
    key: '1',
    doctorName: 'Dr. John H. Watson',
    specialization: 'Surgeon',
    appointmentDate: '2023-01-25 10:00 AM',
  },
  {
    key: '2',
    doctorName: 'Dr. Amir Liaqat Hussian',
    specialization: 'Islamic Medicine and Ethics Scholar',
    appointmentDate: '2023-02-10 03:30 PM',
  },
  {
    key: '3',
    doctorName: 'Dr. Sir Alexander Fleming',
    specialization: 'Microbiologist',
    appointmentDate: '2023-03-05 09:15 AM',
  },
  {
    key: '4',
    doctorName: 'Dr. Henry Jekyll',
    specialization: 'Neuro-Cognitive Enhancements Specialist',
    appointmentDate: '2023-03-20 11:45 AM',
  },  
  {
    key: '5',
    doctorName: 'Dr. Strange',
    specialization: 'Neurosurgeon',
    appointmentDate: '2023-04-02 02:00 PM',
  },
];


const AppointmentsOverviewTable = () => {
  return (
    <Card title="Appointments Overview" style={{ marginBottom: '20px' }}>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

const UserProfile = (user) => {
  return (
    <Card title="User Profile" style={{ marginBottom: '20px' }}>
      <Row gutter={16} align="middle">
        <Col span={6}>
          <Avatar size={64} src={user.profilePicture} icon={<UserOutlined />} />
        </Col>
        <Col span={18}>
          <p>Name: {user.name} </p>
          <p>Email: {user.email}</p>
          {/* Add more user profile information as needed */}
        </Col>
      </Row>
    </Card>
  );
};

const Dashboard = ( user ) => {

  return (
    <Content style={{ padding: '20px' }}>
      <Row gutter={[16, 16]} justify="space-between" align="top">
        <Col xs={24} lg={16}>
          <AppointmentsOverviewTable />
        </Col>
        <Col xs={24} lg={7}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <UserProfile {...user} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default Dashboard;
