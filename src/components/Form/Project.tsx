import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
//리덕스
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addProject, updateProject, openProject } from '../../redux/projectSlice';

const { TextArea } = Input;
const ProjectForm = (props: any) => {
  const projectForm = useAppSelector(state => state.project.form);
  const test = useAppSelector(state => state.project);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  const { formRef, handleData } = props;
  const onFinish = (values: any) => {
    const data = {
      key: '1',
      projectName: values.projectName,
      scene: values.scene,
      aplicationId: values.aplicationId,
      sms: [values.sms1, values.sms2],
      regDate: '2021-09-09 16:48',
      url: `/ht-static/scenes/${values.projectName}/${values.scene}.json`,
      userId: 'User_01',
      projectId: '37',
      note: values.note
    };
    if (projectForm.mode === 'modify') {
      dispatch(updateProject(data));
      dispatch(openProject(false));
    } else {
      formRef.current!.resetFields();
      dispatch(addProject(data));
      dispatch(openProject(false));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    form.setFieldsValue(handleData);
  }, [form, handleData]);

  return (
    <StyledLoginForm>
      <Form
        ref={formRef}
        form={form}
        name="project"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="프로젝트 명"
          name="projectName"
          rules={[{ required: true, message: '프로젝트 이름이 필요합니다' }]}
        >
          <Input placeholder="프로젝트 명" />
        </Form.Item>
        <Form.Item
          label="씬 이름"
          name="scene"
          rules={[{ required: true, message: '씬 이름이 필요합니다' }]}
        >
          <Input placeholder="씬 이름" />
        </Form.Item>
        <Form.Item
          label="어플리케이션 ID"
          name="aplicationId"
          rules={[{ required: true, message: '어플리케이션 ID 가 필요합니다' }]}
        >
          <Input type="number" placeholder="어플리케이션 ID" />
        </Form.Item>
        <Form.Item label="SMS" style={{ marginBottom: 0 }}>
          <Form.Item
            name="sms1"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input type="tel" placeholder="SMS 번호 '-' 제외" />
          </Form.Item>
          <Form.Item
            name="sms2"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <Input type="tel" placeholder="SMS 번호 '-' 제외" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="노트"
          name="note"
        >
          <TextArea rows={4} />
        </Form.Item>

        <CustomButtonGroup>
          <CustomButton>
            <Button type="primary" htmlType="submit">
              {(projectForm.mode === 'modify') ? '변경' : '추가'}
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
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.clusterBg};
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

export default ProjectForm;