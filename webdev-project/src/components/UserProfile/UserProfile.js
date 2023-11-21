import React from "react";
import { Card, Avatar, Typography } from "antd";
import "./UserProfile.css";

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
  return (
    <div className="profileRoot">
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
              <li className="allergyList" key={index}>{allergy}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
