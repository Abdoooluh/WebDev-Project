import React, { useState } from "react";
import { Card, Avatar, Typography, Button, Modal } from "antd";
import "./UserProfile.css";
import EditProfile from "../EditProfile/EditProfile";

const { Meta } = Card;
const { Text } = Typography;

const UserProfile = ({
  name,
  age,
  gender,
  weight,
  height,
  profilePicture,
  allergies,
  bloodGroup,
}) => {
  const [edit, setEdit] = useState(false);

  const startEdit = () => {
    setEdit(true);
  };

  const stopEdit = () => {
    setEdit(false);
  };

  return (
    <div className="profileRoot">
      <Modal open={edit} title="Edit User Profile" onCancel={stopEdit}>
        <EditProfile
          {...{
            name,
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
      <Card
        className="profileCard"
        cover={
          <img
            alt="profile"
            src={profilePicture}
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              right: "5px",
              top: "5px",
            }}
          />
        }
      >
        <Button className="editButton" onClick={startEdit}>
          Edit Profile
        </Button>
        <Meta
          title={<Text style={{ "font-size": "30px" }}>{name}</Text>}
          description={`Age: ${age} | Gender: ${gender} | Blood Group: ${bloodGroup}`}
        />
        <div style={{ marginTop: 16 }}>
          <Text strong>Weight:</Text> {weight} kg
        </div>
        <div>
          <Text strong>Height:</Text> {height} cm
        </div>
      </Card>

      <div className="patientData">
        <Card style={{ width: 400, margin: "20px auto" }}>
          <Meta title="Allergies" />
          <ul>
            {allergies.map((allergy, index) => (
              <li className="allergyList" key={index}>
                {allergy}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
