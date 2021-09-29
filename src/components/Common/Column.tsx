/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Button, Space, Select } from 'antd';
import { sensorData } from '../../constant/Admin';
import { handleDeleteRow, handleSelectChange } from '../Modal/SensorModal';

const { Option } = Select;
const dummySelect: any[] = [];
for (let i = 0; i < 10; i++) {
  dummySelect.push(<Option key={i.toString(10) + i} value={`PJ_${i}`} >{`Node_${i}`}</Option>);
}


export const SectionColumn = [
  {
    title: '공사구간명',
    dataIndex: 'section_name',
    key: 'section_name',
    align: 'center' as 'center',
    width: 100,
    render: (section_name: string) => {
      return (
        <Input key={section_name} defaultValue={section_name} />
      );
    }
  },
  {
    title: '노드 리스트',
    dataIndex: 'node_list',
    key: 'node_list',
    align: 'center' as 'center',
    width: 240,
    render: () => (
      <Select
        mode="multiple"
        size={'middle'}
        placeholder="Please select"
        onChange={handleSelectChange}
        style={{ width: '100%' }}
      >
        {dummySelect}
      </Select>
    )
  },
  {
    title: 'Action',
    key: 'action',
    width: 80,
    render: (text: string, record: any) => (
      <Space size="middle">
        <Button type="primary" danger onClick={(event) => {
          console.log(record);
          handleDeleteRow(record);
        }}>삭제</Button>
      </Space>
    ),
  },
];