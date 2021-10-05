import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { setupAxiosInterceptors } from '../../lib/apiUser';
import { apiAddOrUpdateProject, apiDeleteProjectById } from '../../lib/apiProject';
//리덕스
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addProject, updateProject, openProject, handleProjectList } from '../../redux/projectSlice';

const { TextArea } = Input;
const ProjectForm = (props: any) => {
  const projectForm = useAppSelector(state => state.project.form);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  const { formRef, handleData } = props;
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  //   const data = {
  //     id: values.id === undefined ? '' : values.id,
  //     name: values.name === undefined ? '' : values.name,
  //     scene_name: values.scene_name === undefined ? '' : values.scene_name,
  //     application_id: values.application_id === undefined ? '' : values.application_id,
  //     sms_number1: values.sms_number1 === undefined ? '' : values.sms_number1,
  //     sms_number2: values.sms_number2 === undefined ? '' : values.sms_number2,
  //     url: `/ht-static/scenes/${values.name}/${values.scene_name}.json`,
  //     note: values.note === undefined ? '' : values.note,
  //   };
  //   console.log('백단 통신 필요: update api');
  //   console.log(props);

  //   /** 이부분은 리듀서로 가야함 */
  //   setupAxiosInterceptors();
  //   apiAddOrUpdateProject(data).then(response => {
  //     // console.log('apiAddOrUpdateProject ============ ', response.data);
  //   });


  //   formRef.current!.resetFields();
  //   (modVisible === true) ? props.handleModify(data) : props.handleProject(data);
  //   props.handleVisible();
  // };
  const onFinish = (values: any) => {
    const data = {
      id: values.id === undefined ? '' : values.id,
      name: values.name === undefined ? '' : values.name,
      scene_name: values.scene_name === undefined ? '' : values.scene_name,
      application_id: values.application_id === undefined ? '' : values.application_id,
      sms_number1: values.sms_number1 === undefined ? '' : values.sms_number1,
      sms_number2: values.sms_number2 === undefined ? '' : values.sms_number2,
      url: `/ht-static/scenes/${values.name}/${values.scene_name}.json`,
      note: values.note === undefined ? '' : values.note,
    };
    /** 
     * update api 리듀서로 이동 
     * setupAxiosInterceptors();
     * apiAddOrUpdateProject(data).then(response => {
     *   console.log('apiAddOrUpdateProject ============ ', response.data);
     * });
     * */  
    dispatch(handleProjectList(data));
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
        <Form.Item label="id" style={{ display: 'none' }} name="id">
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="프로젝트 명"
          name="name"
          rules={[{ required: true, message: '프로젝트 이름이 필요합니다' }]}
        >
          <Input placeholder="프로젝트 명" />
        </Form.Item>
        <Form.Item
          label="씬 이름"
          name="scene_name"
          rules={[{ required: true, message: '씬 이름이 필요합니다' }]}
        >
          <Input placeholder="씬 이름" />
        </Form.Item>
        <Form.Item
          label="어플리케이션 ID"
          name="application_id"
          rules={[{ required: true, message: '어플리케이션 ID 가 필요합니다' }]}
        >
          <Input type="number" placeholder="어플리케이션 ID" />
        </Form.Item>
        <Form.Item label="SMS" style={{ marginBottom: 0 }}>
          <Form.Item
            name="sms_number1"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input type="tel" placeholder="SMS 번호 '-' 제외" />
          </Form.Item>
          <Form.Item
            name="sms_number2"
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