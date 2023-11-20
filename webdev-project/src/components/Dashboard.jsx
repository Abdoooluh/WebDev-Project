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

const RecentActivity = ({ recentActivityData }) => {
  return (
    <Card title="Recent Activity" style={{ marginBottom: '20px' }}>
      {recentActivityData.length > 0 ? (
        // Add code to render recent activity items
        // Example: recentActivityData.map(item => <div key={item.id}>{item.activity}</div>)
        null
      ) : (
        <p>There are no recent activities</p>
      )}
    </Card>
  );
};

const UserProfile = () => {
  return (
    <Card title="User Profile" style={{ marginBottom: '20px' }}>
      <Row gutter={16} align="middle">
        <Col span={6}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col span={18}>
          <p>Name: Thanos </p>
          <p>Email: thanos@mcu.com</p>
          {/* Add more user profile information as needed */}
        </Col>
      </Row>
    </Card>
  );
};

const Dashboard = () => {
  const recentActivityData = []; // Add your recent activity data array here

  return (
    <Content style={{ padding: '20px' }}>
      <Row gutter={[16, 16]} justify="space-between" align="top">
        <Col xs={24} lg={16}>
          <AppointmentsOverviewTable />
        </Col>
        <Col xs={24} lg={7}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <UserProfile />
            </Col>
            <Col xs={24}>
              <RecentActivity recentActivityData={recentActivityData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default Dashboard;
