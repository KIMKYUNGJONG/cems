import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Select } from 'antd';

//리덕스
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addUser, updateUser, openUser } from '../../redux/userSlice';

const { TextArea } = Input;
const { Option } = Select;
const dummySelect: any[] = [];
for (let i = 10; i < 36; i++) {
  dummySelect.push(<Option key={i.toString(36) + i} value={`PJ_${i}`} >{i.toString(36) + i}</Option>);
}

const UserForm = (props: any) => {
  const userForm = useAppSelector(state => state.user.form);
  const test = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { formRef, handleData } = props;
  const onFinish = (values: any) => {
    if (userForm.mode === 'modify') {
      dispatch(updateUser(values));
      dispatch(openUser(false));
    } else {
      formRef.current!.resetFields();
      dispatch(addUser(values));
      dispatch(openUser(false));
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleSelectChange = (value: any) => {
    console.log(`Selected: ${value}`);
  };

  useEffect(() => {
    form.setFieldsValue(handleData);
  }, [form, handleData]);
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
          <Input disabled={userForm.mode === 'modify' ? true : false} placeholder="사용자 ID" />
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
          <Input disabled={userForm.mode === 'modify' ? true : false} placeholder="회사명" />
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
              {(userForm.mode === 'modify') ? '변경' : '추가'}
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