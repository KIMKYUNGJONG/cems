import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Button } from 'antd';
import ProjectForm from '../Form/Project';
import UserForm from '../Form/User';
import { FormInstance } from 'antd/es/form';
import CustomTable from '../Table/CustomTable';
import { SectionColumn } from '../Common/Column';

export const handleDeleteRow = (value: any) => {
  console.log('section Delete', value);
};
export const handleSelectChange = (value: any) => {
  console.log('section List: 저장 클릭시 리스트 백단통신', value);
};
export const handleSave = (value: any) => {
  console.log('saved', value);
};
const SensorModal = (props: any) => {
  const { label } = props.formType;
  const dummyData = [
    {
      section_name: 'A구간',
      node_list: [],
    }];

  return (
    <>
      {(label === 'section') ?
        <Modal title={'공사구간 관리'} visible={props.sensorVisible} onCancel={props.handleVisible} footer={null}>
          <CustomTable columns={SectionColumn} data={dummyData} />
        </Modal> :
        <Modal title={'임계치 관리'} visible={props.sensorVisible} onCancel={props.handleVisible} footer={null}>
          <CustomTable columns={SectionColumn} data={dummyData} />
        </Modal>
      }
    </>
  );
};

export default SensorModal;