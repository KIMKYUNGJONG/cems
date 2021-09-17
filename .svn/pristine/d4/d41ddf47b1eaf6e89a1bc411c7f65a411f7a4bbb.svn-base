import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const dummySelect: any[] = [];
for (let i = 10; i < 36; i++) {
  dummySelect.push(<Option key={i.toString(36) + i} value={`PJ_${i}`} >{i.toString(36) + i}</Option>);
}

const UserForm = (props: any) => {
  const [form] = Form.useForm();
  const { formRef, user, modVisible } = props;
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const data = {
      id: values.id,
      password: values.password,
      company: values.company,
      manager: values.manager,
      contact: values.contact,
      email: values.email,
      project: values.project,
      note: values.note
    };
    console.log('백단 통신 필요: update api');
    console.log(props);
    formRef.current!.resetFields();
    (modVisible === true) ? props.handleModify(data) : props.handleUser(data);
    props.handleVisible();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleSelectChange = (value: any) => {
    console.log(`Selected: ${value}`);
  };

  useEffect(() => {
    form.setFieldsValue(user);
  }, [form, user]);
  return (
    <StyledForm>
      <Form
        ref={formRef}
        form={form}
        name="user"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={'사용자 ID'}
          name="id"
          rules={[{ required: true, message: '사용자 ID가 필요합니다' }]}
        >
          <Input disabled={modVisible ? true : false} placeholder="사용자 ID" />
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
          <Input disabled={modVisible ? true : false} placeholder="회사명" />
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
          name="project"
        >
          <Select
            mode="multiple"
            size={'middle'}
            placeholder="Please select"
            onChange={handleSelectChange}
            style={{ width: '100%' }}
          >
            {dummySelect}
          </Select>
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
              {(props.modVisible) ? '변경' : '추가'}
            </Button>
          </CustomButton>
          <CustomButton>
            <Button onClick={() => {
              formRef.current!.resetFields();
              props.handleVisible();
            }}>
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