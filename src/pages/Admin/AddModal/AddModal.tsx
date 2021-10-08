import React from 'react';
import { Modal } from 'antd';
import ProjectForm from '../../../components/Form/Project';
import UserForm from '../../../components/Form/User';
import { FormInstance } from 'antd/es/form';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { openProject } from '../../../redux/projectSlice';
import { openUser } from '../../../redux/userSlice';
const AddModal = (props: any) => {
  const projectForm = useAppSelector(state => state.project.form);
  const userForm = useAppSelector(state => state.user.form);
  const dispatch = useAppDispatch();
  const formRef = React.createRef<FormInstance>();
  const resetFields = (type:string) => {
    (type === 'user') ? dispatch(openUser(false)) : dispatch(openProject(false));
    formRef.current!.resetFields();
  };
  const totalProjectList = useAppSelector(state => state.project.project);

  return (
    <>
      <Modal
        title={(props.type === 'user' && userForm.mode === 'add') ? '사용자 추가' : '프로젝트 추가'}
        visible={(props.type === 'user' && userForm.mode === 'add') ? userForm.visible : projectForm.visible}
        onCancel={() => resetFields(props.type)}
        footer={null}
      >
        {
          (props.type === 'user' && userForm.mode === 'add') ? 
            <UserForm label={userForm.type} formRef={formRef} totalProjectList={totalProjectList} /> :
            <ProjectForm label={projectForm.type} formRef={formRef} />
        }
      </Modal>
      <Modal
        title={(props.type === 'user' && userForm.mode === 'modify') ? '사용자 변경' : '프로젝트 변경'}
        visible={(props.type === 'user' && userForm.mode === 'modify') ? userForm.visible : projectForm.visible}
        onCancel={() => resetFields(props.type)}
        footer={null}
      >
        {
          (props.type === 'user' && userForm.mode === 'modify') ? 
            <UserForm label={userForm.type} formRef={formRef} {...props} totalProjectList={totalProjectList}/> :
            <ProjectForm label={projectForm.type} formRef={formRef} {...props} />
        }
      </Modal>
    </>
  );
};

export default AddModal;