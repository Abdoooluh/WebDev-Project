import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const { Meta } = Card;

const EditProfile = ({ name, age, gender, weight, height, bloodGroup, onSave }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Call onSave prop to handle saving the edited profile
    onSave(values);
  };

  return (
    <Card style={{ width: 450, margin: 'auto' }}>
      <Meta title="Edit Profile" />
      <Form form={form} onFinish={onFinish} initialValues={{ name, age, gender, weight, height, bloodGroup }}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age" rules={[{ required: true, type: 'number', message: 'Please enter your age' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please enter your gender' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Weight" name="weight" rules={[{ required: true, type: 'number', message: 'Please enter your weight' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Height" name="height" rules={[{ required: true, type: 'number', message: 'Please enter your height' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Blood Group" name="bloodGroup" rules={[{ required: true, message: 'Please enter your blood group' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EditProfile;
