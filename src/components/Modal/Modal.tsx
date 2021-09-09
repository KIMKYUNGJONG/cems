import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ProjectForm from '../../components/Form/Project';
import UserForm from '../../components/Form/User';

const AntModal = (props: any) => {
  const { label } = props.formType;
  return (
    <>
      {(label === 'user') ?
        <Modal title={'사용자 추가'} visible={props.isModalVisible} onCancel={props.handleCancel} footer={null}>
          <UserForm label={label} handleFormValue={props.handleFormValue} {...props} />
        </Modal> :
        <Modal title={'프로젝트 추가'} visible={props.isModalVisible} onCancel={props.handleCancel} footer={null}>
          <ProjectForm label={label} handleFormValue={props.handleFormValue} {...props} />
        </Modal>
      }
    </>
  );
};

export default AntModal;