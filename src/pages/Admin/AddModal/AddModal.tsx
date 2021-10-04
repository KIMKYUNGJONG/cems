import React from 'react';
import { Modal } from 'antd';
import ProjectForm from '../../../components/Form/Project';
import UserForm from '../../../components/Form/User';
import { FormInstance } from 'antd/es/form';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { openProject } from '../../../redux/projectSlice';
import { openUser } from '../../../redux/userSlice';
const AddModal = (props:any) => {
  /**
   * 리덕스에서 폼 객체를 받아온다
   * 폼의 타입은 사용자, 프로젝트
   * 우선 선행되어야할 목표. 폼의 타입
   */
  const projectForm = useAppSelector(state => state.project.form);
  const userForm = useAppSelector(state => state.user.form);
  const dispatch = useAppDispatch();
  const formRef = React.createRef<FormInstance>();
  return (
    <>
      <Modal 
        title={props.type === 'user' && userForm.mode === 'add' ? '사용자 추가' : '프로젝트 추가'} 
        visible={props.type === 'user' && userForm.mode === 'add' ? userForm.visible : projectForm.visible} 
        onCancel={()=> (props.type === 'user') ? dispatch(openUser(false)) : dispatch(openProject(false))} 
        footer={null}
      >
        {
          props.type === 'user' && userForm.mode === 'add' ? <UserForm label={userForm.type} formRef={formRef} /> :
            <ProjectForm label={projectForm.type} formRef={formRef} />
        }
      </Modal>
      <Modal 
        title={props.type === 'user' && userForm.mode === 'modify' ? '사용자 변경' : '프로젝트 변경'} 
        visible={props.type === 'user' && userForm.mode === 'modify' ? userForm.visible : projectForm.visible} 
        onCancel={()=> (props.type === 'user') ? dispatch(openUser(false)) : dispatch(openProject(false))} 
        footer={null}
      >
        {
          props.type === 'user' && userForm.mode === 'modify' ? <UserForm label={userForm.type} formRef={formRef} {...props} /> :
            <ProjectForm label={projectForm.type} formRef={formRef} {...props} />
        }
      </Modal>
    </>
  );
};

export default AddModal;