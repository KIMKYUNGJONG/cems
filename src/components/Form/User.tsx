import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';

const UserForm = (props: any) => {
  //const { handleLogin } = props;
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
          label={`${props.label} Name`}
          name="name"
          rules={[{ required: true, message: 'Please input User Name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={`${props.label} Info`}
          name="info"
          rules={[{ required: true, message: 'Please input User Info!' }]}
        >
          <Input />
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

export default UserForm;