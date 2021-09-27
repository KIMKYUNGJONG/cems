import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ProjectForm from '../Form/Project';
import UserForm from '../Form/User';
import { FormInstance } from 'antd/es/form';
import CustomTable from '../Table/CustomTable';

const SensorModal = (props: any) => {
  const { label } = props.formType;
  return (
    <>
      {(label === 'section') ?
        <Modal title={'공사구간 관리'} visible={props.sensorVisible} onCancel={props.handleVisible} footer={null}>
          <CustomTable />
        </Modal> :
        <Modal title={'임계치 관리'} visible={props.sensorVisible} onCancel={props.handleVisible} footer={null}>
          <CustomTable />
        </Modal>
      }
    </>
  );
};

export default SensorModal;