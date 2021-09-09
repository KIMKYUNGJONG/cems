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
  const [form] = Form.useForm();
  return (
    <StyledForm>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label={`${props.label} ID`}
          name="id"
          rules={[{ required: true, message: 'Please input User ID!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={`${props.label} PW`}
          name="password"
          rules={[{ required: true, message: 'Please input User PW!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={'Company Name'}
          name="company"
          rules={[{ required: true, message: 'Please input Company Name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Manager Name'}
          name="manager"
          rules={[{ required: true, message: 'Please input Manager Name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Contact'}
          name="contact"
          rules={[{ required: false, message: 'Please input Contact Number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'E-mail'}
          name="email"
          rules={[{ required: false, message: 'Please input Email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Project List'}
          name="projectList"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Memo'}
          name="memo"
          rules={[{ required: false }]}
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
    </StyledForm>
  );
};

const StyledForm = styled.div`
  padding: 20px;
  width: 100%;
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