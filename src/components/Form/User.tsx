import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Select, Alert } from 'antd';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addUser, updateUser, openUser, handleUserList } from '../../redux/userSlice';

const { TextArea } = Input;
const { Option } = Select;

const UserForm = (props: any) => {
  const userForm = useAppSelector(state => state.user.form);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { formRef, user, modVisible, project, totalProjectList, handleData } = props;
  const [msg, setMsg] = useState('');

  console.log('UserForm user ', handleData);
  console.log('totalProjectList ', totalProjectList);

  console.log('msg ', msg);

  const totalProjectNameList: any[] = [];

  if (totalProjectList !== undefined) {
    for (let i = 0; i < totalProjectList.length; i++) {
      if (user !== undefined) { // 내가 등록한 프로젝트 + 지정된 사용자 없는 리스트만 보여줌
        if (totalProjectList[i].user_id === user.id) {
          totalProjectNameList.push(<Option key={totalProjectList[i].id} value={totalProjectList[i].name}>{totalProjectList[i].name}</Option>);
        }
      }
      if (totalProjectList[i].user_id === '' || totalProjectList[i].user_id == null) {
        totalProjectNameList.push(<Option key={totalProjectList[i].id} value={totalProjectList[i].name}>{totalProjectList[i].name}</Option>);
      }
    };
  }
  const onFinish = (values: any) => {
    const data = {
      id: values.id === undefined ? '' : values.id,
      username: values.username === undefined ? '' : values.username,
      password: values.password === undefined ? '' : values.password,
      company_name: values.company_name === undefined ? '' : values.company_name,
      manager_name: values.manager_name === undefined ? '' : values.manager_name,
      contact_number: values.contact_number === undefined ? '' : values.contact_number,
      email: values.email === undefined ? '' : values.email,
      note: values.note === undefined ? '' : values.note,
      projectNameList: values.projectNameList,
      projects: values.projects,
    };
    
    dispatch(handleUserList(data)).then(result => {
      console.log('result ', result);

      if (result.payload === '') { // success
        if (userForm.mode === 'modify') {
          dispatch(updateUser(data));
          dispatch(openUser(false));
        } else {
          formRef.current!.resetFields();
          dispatch(addUser(data));
          dispatch(openUser(false));
        }
      } else { // fail
        setMsg(result.payload);
      }
    });
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
        <Form.Item label="id" style={{ display: 'none' }} name="id">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="projects" style={{ display: 'none' }} name="projects" />

        {msg !== '' &&
        <div>
          <Alert message={msg} type="error" />
          <br/>
        </div>
        }

        <Form.Item
          label={'사용자 ID'}
          name="username"
          rules={[{ required: true, message: '사용자 ID가 필요합니다' }]}   
          validateStatus={msg == '' ? '' : 'error'}
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
          name="company_name"
          rules={[{ required: true, message: '회사명이 필요합니다' }]}
        >
          <Input disabled={userForm.mode === 'modify' ? true : false} placeholder="회사명" />
        </Form.Item>
        <Form.Item
          label={'관리자'}
          name="manager_name"
          rules={[{ required: true, message: '관리자를 등록해 주십시오' }]}
        >
          <Input placeholder="관리자" />
        </Form.Item>
        <Form.Item
          label={'연락처'}
          name="contact_number"
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
          name="projectNameList"
        >
          <Select
            mode="multiple"
            size={'middle'}
            placeholder="Please select"
            onChange={handleSelectChange}
            style={{ width: '100%' }}
            defaultValue={user === undefined ? [] : user.projectNameList}
          >
            {totalProjectNameList}
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
            {(userForm.mode === 'modify') ? 
              <Button onClick={() => {
                setMsg('');
                dispatch(openUser(false));
              }}>
                취소
              </Button> : 
              <Button onClick={() => {
                setMsg('');
                dispatch(openUser(false));
                formRef.current!.resetFields();
              }}>
                취소
              </Button>
            }
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