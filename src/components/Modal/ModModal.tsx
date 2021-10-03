import React from 'react';
import { Modal } from 'antd';
import ProjectForm from '../../components/Form/Project';
import UserForm from '../../components/Form/User';
import { FormInstance } from 'antd/es/form';

const ModModal = (props: any) => {
  const formRef = React.createRef<FormInstance>();
  const { label } = props.formType;
  const { modVisible, handleVisible } = props;
  return (
    <>
      {(label === 'user') ?
        <Modal title={'사용자 변경'} visible={modVisible} onCancel={handleVisible} footer={null}>
          <UserForm label={label} formRef={formRef} {...props} />
        </Modal> :
        <Modal title={'프로젝트 변경'} visible={modVisible} onCancel={handleVisible} footer={null}>
          <ProjectForm label={label} formRef={formRef} {...props} />
        </Modal>
      }
    </>
  );
};

export default ModModal;