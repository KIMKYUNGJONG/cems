import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ProjectForm from '../../components/Form/Project';
import UserForm from '../../components/Form/User';

const AntModal = (props: any) => {
  const { label } = props.formType;
  return (
    <>
      {(label === 'user') ?
        <Modal title={`Add ${label}`} visible={props.isModalVisible} onCancel={props.handleCancel} footer={null}>
          <UserForm form={props.form} label={label} handleValue={props.handleFormValue} />
        </Modal> :
        <Modal title={`Add ${label}`} visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
          <ProjectForm label={label} handleValue={props.handleFormValue} />
        </Modal>
      }
    </>
  );
};

export default AntModal;