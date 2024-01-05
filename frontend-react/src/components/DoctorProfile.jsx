import React, { useEffect, useState } from 'react';
import { Card, Avatar, Table, Button, Modal } from 'antd';

const DoctorProfile = (props) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  useEffect(()=>{console.log(props)}, [])
  const cardStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const nameStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const specializationStyle = {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '10px',
  };

  const qualificationStyle = {
    fontSize: '1em',
    color: '#777',
  };

  const columns = [
    {
      title: 'Time Slot',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Button
          type={record.isSelected ? 'primary' : 'default'}
          onClick={() => handleSelectTimeSlot(record.time)}
          disabled={record.isBooked}
        >
          Select
        </Button>
      ),
    },
  ];

  const allTimeSlots = [
    { key: '1', time: '2024-01-06 09:00 AM', isBooked: false },
    { key: '2', time: '2024-01-06 09:30 AM', isBooked: true },
    { key: '3', time: '2024-01-06 10:00 AM', isBooked: false },
    { key: '4', time: '2024-01-06 10:30 AM', isBooked: false },
    { key: '5', time: '2024-01-06 02:00 PM', isBooked: true },
    { key: '6', time: '2024-01-06 02:30 PM', isBooked: false },
    { key: '7', time: '2024-01-06 03:00 PM', isBooked: false },
    { key: '8', time: '2024-01-06 03:30 PM', isBooked: false },
    { key: '9', time: '2024-01-06 04:00 PM', isBooked: true },
    { key: '10', time: '2024-01-06 04:30 PM', isBooked: false },
    // Add more time slots as needed
  ];
  

  // Filter out unavailable time slots
  const availableTimeSlots = allTimeSlots
    .filter((slot) => !slot.isBooked)
    .map((slot) => ({
      ...slot,
      isSelected: selectedTimeSlot === slot.time,
    }));

  const handleSelectTimeSlot = (time) => {
    setSelectedTimeSlot(time);
  };

  const handleConfirmAppointment = () => {
    // Add logic to confirm the appointment with the selectedTimeSlot
    Modal.success({
      title: 'Appointment Confirmed',
      content: `Your appointment with Dr. John Doe at ${selectedTimeSlot} has been confirmed.`,
    });
  };

  return (
    <Card style={cardStyle} title="Doctor Profile">
      <div style={imageStyle}>
        <Avatar
          size={150}
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph"
          alt="Doctor Image"
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={nameStyle}>Dr. John Doe</h2>
        <p style={specializationStyle}>Cardiologist</p>
        <p style={qualificationStyle}>MBBS, MD, FACC</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Available Time Slots</h3>
        <Table columns={columns} dataSource={availableTimeSlots} pagination={false} />
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button type="primary" onClick={handleConfirmAppointment} disabled={!selectedTimeSlot}>
            Confirm Appointment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorProfile;
