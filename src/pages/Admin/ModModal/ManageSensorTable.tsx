import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space, Select, Popconfirm, message } from 'antd';
import styled from 'styled-components';

import { useAppDispatch } from '../../../redux/hooks';
import { openSection, updateSensorValue } from '../../../redux/sectionSlice';

// 샘플 테이블 데이터
/* eslint-disable camelcase */
const { Option } = Select;

const ManageSensorTable = ({ handleSave, data }: any) => {
  const [sensorValue, setValue] = useState({});
  const inputRef = useRef<Input>(null);
  const dispatch = useAppDispatch();

  const handleInputChange = (value: any, record: any, index: any) => {
    const newRecord = Object.assign({}, record);
    newRecord.max_value = value;
    setValue(newRecord);
  };

  const postValue = (value: any, target: any) => {
    inputRef.current!.blur();
    target.disabled = true;
    dispatch(updateSensorValue(value));
  };
  const activate = (target: any) => {
    target.disabled = false;
    target.focus();
  };
  const SectionColumn = [
    {
      title: '센서종류',
      dataIndex: 'sensor_type',
      key: 'sensor_type',
      width: 100
    },
    {
      title: '임계치 값',
      dataIndex: 'max_value',
      key: 'max_value',
      width: 240,
      render: (max_value: number, record: any, index: number) => (
        <Input
          defaultValue={max_value}
          ref={inputRef}
          onChange={(e) => handleInputChange(e.target.value, record, index)}
          onKeyPress={(e) => e.key === 'Enter' ? postValue(sensorValue, e.target) : null}
          onClick={(e) => activate(e.target)}
          onBlur={e => { e.currentTarget.disabled = true; postValue(sensorValue, e.target); }}
          style={{ width: '100%' }}
        />
      )
    }
  ];
  return (
    <StWrapper>
      <Table
        size="small"
        rowKey={(record: any) => record.node_id}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { console.log(record, rowIndex); }, // click row
          };
        }}
        columns={SectionColumn} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 180 }} />
      <ButtonGroup>
        <Button type="primary" onClick={() => handleSave(data)}>저장</Button>
        <Button onClick={() => dispatch(openSection(false))}>취소</Button>
      </ButtonGroup>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  min-height: 280px;
  overflow: auto;

  & .ant-table-wrapper {
    max-height: 100%;
  }
`;
const ButtonGroup = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  & button {
    margin: 0 10px;
    width: 150px;
  }
`;
export default ManageSensorTable;