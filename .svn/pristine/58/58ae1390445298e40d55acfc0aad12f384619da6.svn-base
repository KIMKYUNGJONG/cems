import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;
const UserForm = (props: any) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.handleFormValue(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    props.handleFormValue(errorInfo);
  };

  return (
    <StyledForm>
      <Form
        name="user"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label={'사용자 ID'}
          name="id"
          rules={[{ required: true, message: '사용자 ID가 필요합니다' }]}
        >
          <Input placeholder="사용자 ID" />
        </Form.Item>
        <Form.Item
          label={'사용자 PW'}
          name="password"
          rules={[{ required: true, message: '사용자 PW가 필요합니다' }]}
        >
          <Input placeholder="사용자 PW" />
        </Form.Item>

        <Form.Item
          label={'회사명'}
          name="company"
          rules={[{ required: true, message: '회사명이 필요합니다' }]}
        >
          <Input placeholder="회사명" />
        </Form.Item>
        <Form.Item
          label={'관리자'}
          name="manager"
          rules={[{ required: true, message: '관리자를 등록해 주십시오' }]}
        >
          <Input placeholder="관리자" />
        </Form.Item>
        <Form.Item
          label={'연락처'}
          name="contact"
        >
          <Input type="tel" placeholder="연락처" />
        </Form.Item>
        <Form.Item
          label={'E-mail'}
          name="email"
          rules={[{ type: 'email', message: '이메일 형식에 맞지 않습니다' }]}
        >
          <Input placeholder="example@email.com" />
        </Form.Item>
        <Form.Item
          label={'프로젝트 리스트'}
          name="projectList"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'노트'}
          name="note"
        >
          <TextArea rows={4} />
        </Form.Item>

        <CustomButtonGroup>
          <CustomButton>
            <Button type="primary" htmlType="submit">
              추가
            </Button>
          </CustomButton>
          <CustomButton>
            <Button onClick={props.handleCancel}>
              취소
            </Button>
          </CustomButton>
        </CustomButtonGroup>
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
const CustomButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;
`;

const CustomButton = styled.div`
  width: 70px;
  & button {
    width:100%;
  }
`;

export default UserForm;