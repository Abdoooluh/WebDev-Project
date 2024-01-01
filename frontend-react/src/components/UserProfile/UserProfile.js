import React, { useState } from 'react';
import { Card, Avatar, Divider, Modal, Button } from 'antd';
import EditProfile from "../EditProfile/EditProfile";

const UserProfile = ({
  name,
  email,
  age,
  gender,
  weight,
  height,
  profilePicture,
  allergies,
  bloodGroup,
}) => {
  const cardStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const detailsStyle = {
    textAlign: 'left',
    padding: '0 20px',
  };

  const allergiesCardStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    marginTop: 'auto', // Push the button to the bottom of the card
  };

  const [edit, setEdit] = useState(false);

  const startEdit = () => {
    setEdit(true);
  };

  const stopEdit = () => {
    setEdit(false);
  };

  return (
    <div>
      <Modal open={edit} title="Edit User Profile" onCancel={stopEdit}>
        <EditProfile
          {...{
            name,
            email,
            age,
            gender,
            weight,
            height,
            profilePicture,
            allergies,
            bloodGroup,
          }}
        ></EditProfile>
      </Modal>
      <Card style={cardStyle} title="Patient Profile">
        <div style={imageStyle}>
          <Avatar size={150} src={profilePicture} alt="Patient Image" />
        </div>
        <div style={detailsStyle}>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Weight:</strong> {weight}</p>
          <p><strong>Height:</strong> {height}</p>
          <p><strong>Blood Group:</strong> {bloodGroup}</p>
        </div>
        <Button style={buttonStyle} onClick={startEdit}>
          Edit Profile
        </Button>
      </Card>

      <Card style={allergiesCardStyle} title="Allergies">
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {allergies.map((allergy, index) => (
            <li key={index}>{allergy}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserProfile;
