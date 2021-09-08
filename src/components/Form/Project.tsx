import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';

const ProjectForm = (props: any) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.handleValue(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    props.handleValue(errorInfo);
  };

  return (
    <StyledLoginForm>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: 'Please input your ProjectName!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Project Path"
          name="path"
          rules={[{ required: true, message: 'Please input your ProjectPath!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <CustomButton>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </CustomButton>
        </Form.Item>
      </Form>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
  padding: 20px;
  width: 330px;
  background-color: ${(props) => props.theme.clusterBg};
  border-radius: 15px;
  & label {
    color: ${(props) => props.theme.fontColor};
  }
`;

const CustomButton = styled.div`
  text-align: center;
  & button {
    width:100%;
  }
`;

export default ProjectForm;