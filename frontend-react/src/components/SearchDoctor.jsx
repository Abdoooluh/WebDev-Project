import React, { useState } from "react";
import { Form, Card, Button, Radio, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import DoctorProfile from "./DoctorProfile";

const { Option } = Select;

const getDoctor = async (values) => {
  try {
    const res = await axios.post(
      "//localhost:3000/api/doctor/searchDoctor",
      values
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const QuestionnaireForm = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [form] = Form.useForm();
  const [submissionData, setSubmissionData] = useState(null);

  const onFinish = async (values) => {
    setSubmissionData(values);
    console.log(values);
    // You can handle the submission logic here, such as sending data to a server.
    const nextDoctor = await getDoctor(values).then(() => {
      navigate("/doctor");
    });
    // Redirect to the /doctor page after successful form submission
    <Routes>
      <Route path="/doctor" element={<DoctorProfile {...nextDoctor} />} />
    </Routes>;
  };

  return (
    <Card title="Medical Questionnaire">
      <Form onFinish={onFinish} layout="vertical">
        {/* Age Group */}
        <Form.Item
          name="ageGroup"
          label="Age Group"
          rules={[{ required: true, message: "Please select your age group" }]}
        >
          <Radio.Group>
            <Radio value="under18">Under 18</Radio>
            <Radio value="18to40">18-40</Radio>
            <Radio value="40plus">40+</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Allergies */}
        <Form.Item
          name="knownAllergies"
          label="Do you have any known allergies?"
          rules={[{ required: true, message: "Please select an option" }]}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Type of Medical Concern */}
        <Form.Item
          name="medicalConcern"
          label="Type of Medical Concern"
          rules={[
            { required: true, message: "Please select your medical concern" },
          ]}
        >
          <Select placeholder="Select your medical concern">
            <Option value="eye">Eye Problem</Option>
            <Option value="ent">Ear, Nose, Throat (ENT)</Option>
            <Option value="cardio">Cardiovascular</Option>
            <Option value="respiratory">Respiratory</Option>
            <Option value="gastro">Gastric/Digestive</Option>
            <Option value="musculoskeletal">Muscular/Skeletal</Option>
            <Option value="dermatological">Dermatological</Option>
            <Option value="neurological">Neurological</Option>
            <Option value="other">Other (please specify)</Option>
          </Select>
        </Form.Item>

        {/* Other (please specify) */}
        <Form.Item
          name="otherMedicalConcern"
          label="If 'Other', please specify"
        >
          <Input placeholder="Specify other medical concern" />
        </Form.Item>

        {/* Severity of the Issue */}
        <Form.Item
          name="severity"
          label="Severity of the Issue"
          rules={[
            {
              required: true,
              message: "Please select the severity of the issue",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="mild">Mild</Radio>
            <Radio value="moderate">Moderate</Radio>
            <Radio value="severe">Severe</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Duration of the Problem */}
        <Form.Item
          name="duration"
          label="Duration of the Problem"
          rules={[
            {
              required: true,
              message: "Please select the duration of the problem",
            },
          ]}
        >
          <Select placeholder="Select the duration of the problem">
            <Option value="lessThanWeek">Less than a week</Option>
            <Option value="oneToTwoWeeks">1-2 weeks</Option>
            <Option value="twoToFourWeeks">2-4 weeks</Option>
            <Option value="moreThanMonth">More than a month</Option>
          </Select>
        </Form.Item>

        {/* Currently taking any medications */}
        <Form.Item
          name="takingMedications"
          label="Are you currently taking any medications?"
          rules={[{ required: true, message: "Please select an option" }]}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Relevant surgeries or medical procedures in the past */}
        <Form.Item
          name="pastSurgeries"
          label="Have you had any relevant surgeries or medical procedures in the past?"
          rules={[{ required: true, message: "Please select an option" }]}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Is this a recurring issue */}
        <Form.Item
          name="recurringIssue"
          label="Is this a recurring issue?"
          rules={[{ required: true, message: "Please select an option" }]}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Type of Assistance Needed */}
        <Form.Item
          name="assistanceType"
          label="Type of Assistance Needed"
          rules={[
            {
              required: true,
              message: "Please select the type of assistance needed",
            },
          ]}
        >
          <Select placeholder="Select the type of assistance needed">
            <Option value="regularInquiry">Regular Inquiry</Option>
            <Option value="urgentInquiry">Urgent Inquiry</Option>
            <Option value="emergency">Emergency</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* Use this area to recommend the doctor */}
      {submissionData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(submissionData, null, 2)}</pre>
        </div>
      )}
    </Card>
  );
};

export default QuestionnaireForm;
