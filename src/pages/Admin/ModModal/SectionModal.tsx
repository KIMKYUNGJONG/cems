import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import ManageSectionTable from './ManageSectionTable';
import ManageSensorTable from './ManageSensorTable';
import { FormInstance } from 'antd/es/form';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { openSection, addSectionList, updateSectionList, deleteSectionList } from '../../../redux/sectionSlice';

const SectionModal = (props: any) => {
  const fetchSectionList = useAppSelector(state => state.section.sectionList);
  const fetcgSensorList = useAppSelector(state => state.section.sensorList);
  useEffect(() => {
    console.log('changed', fetchSectionList);
    console.log('changed', fetcgSensorList);
  }, [fetchSectionList, fetcgSensorList]);
  const sectionForm = useAppSelector(state => state.section.form);
  const dispatch = useAppDispatch();
  const handleAddRow = () => {
    const newData = {
      id: fetchSectionList.length + 1,
      section_name: 'A구간',
      node_list: []
    };
    dispatch(addSectionList(newData));
  };
  return (
    <>
      {(props.type === 'section') ?
        <Modal title={'공사구간 관리'} visible={sectionForm.visible} onCancel={() => dispatch(openSection(false))} footer={null}>
          <ManageSectionTable data={fetchSectionList} handleAddRow={handleAddRow} />
        </Modal> :
        <Modal title={'임계치 관리'} visible={sectionForm.visible} onCancel={() => dispatch(openSection(false))} footer={null}>
          <ManageSensorTable data={fetcgSensorList} />
        </Modal>
      }
    </>
  );
};

export default SectionModal;