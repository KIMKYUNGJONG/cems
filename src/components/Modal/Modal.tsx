import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ProjectForm from '../../components/Form/Project';
import UserForm from '../../components/Form/User';

const AntModal = (props: any) => {
  const { label } = props.formType;
  return (
    <>
      {(label === 'user') ?
        <Modal title={'사용자 추가'} visible={props.isModalVisible} onCancel={props.handleVisible} footer={null}>
          <UserForm label={label} {...props} />
        </Modal> :
        <Modal title={'프로젝트 추가'} visible={props.isModalVisible} onCancel={props.handleVisible} footer={null}>
          <ProjectForm label={label} {...props} />
        </Modal>
      }
    </>
  );
};

export default AntModal;