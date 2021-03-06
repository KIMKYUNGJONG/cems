import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import SectionTable from '../Table/SectionTable';

const dummyData = [
  {
    section_name: 'A구간',
    node_list: []
  }];

const SensorModal = (props: any) => {
  const { label } = props.formType;
  const [dmData, setDmData] = useState<{}>({});
  const [nodeList, setNodeList] = useState([]);
  const [name, setName] = useState({});
  const [dummyDataList, setDataList] = useState(dummyData);
  useEffect(() => {
    console.log('save된 dmData: ', dmData);
    console.log(dummyDataList);
  });
  const handleSave = () => {
    console.log(dummyDataList);
  };
  const handleAddRow = () => {
    const dataSource: any = [...dummyDataList];
    const newData = {
      section_name: 'A구간',
      node_list: []
    };
    setDataList([...dataSource, newData]);
  };
  const handleDeleteRow = (value: any) => {
    const dataSource: any = [...dummyDataList];
    setDataList([dataSource.filter((item: any, idx: number) => item.name !== value)]);
    // 데이터 별 아이디가 필요할 것 같음
    // 현재는 테이블 인덱스로 삭제를 함.
  };
  const handleInputChange = (value: any) => {
    console.log('section List: 저장 클릭시 리스트 백단통신', value);
    setName(value);
    console.log(value);
  };
  const handleSelectChange = (value: any, index: number) => {
    setNodeList(value);
    console.log(value, index);
  };
  return (
    <>
      {(label === 'section') ?
        <Modal title={'공사구간 관리'} visible={props.sensorVisible} onCancel={props.handleVisible} footer={null}>
          <SectionTable data={dummyDataList}
            handleInputChange={handleInputChange}
            handleSave={handleSave}
            handleDeleteRow={handleDeleteRow}
            handleSelectChange={handleSelectChange}
            handleAddRow={handleAddRow}
          />
        </Modal> :
        <Modal title={'임계치 관리'} visible={props.sensorVisible} onCancel={props.handleVisible} footer={null}>
          <SectionTable data={dummyDataList} handleSave={handleSave} handleDeleteRow={handleDeleteRow} handleSelectChange={handleSelectChange} />
        </Modal>
      }
    </>
  );
};

export default SensorModal;