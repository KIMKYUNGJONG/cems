/* eslint-disable camelcase */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Input, Select, } from 'antd';
import { sensorData } from '../../constant/Admin';

const { Option } = Select;

function SensorTable({ dataSource, handleSensorData }: any) {
  const { asset } = sensorData[0];
  console.log(dataSource);
  //컨테이너에서 dataSource로 받아왔다고 가정하고,
  const [data, setData] = useState(asset);

  function handleSelect(value: any, key: number, keyName: any) {
    const newData: any = sensorData[0].asset[key];
    const index = newData.hasOwnProperty(keyName) ?
      newData[keyName] = value : null;
    handleSensorData(newData);
  }
  // 셀렉트값 변경시
  function handleInput(e: any, key: number, keyName: any) {
    const newData: any = sensorData[0].asset[key];
    const index = newData.hasOwnProperty(keyName) ?
      newData[keyName] = e.target.value : null;
    handleSensorData(newData);
  }
  // 인풋 값 변경시

  const columns = [
    {
      title: '노드 ID',
      dataIndex: 'node_id',
      key: 'node_id',
      align: 'center' as 'center',
      className: 'custom-th',
      width: 100,
    },
    {
      title: 'adc1',
      key: 'adc1',
      children: [
        {
          title: '센서종류',
          dataIndex: 'adc1_type',
          key: 'adc1_type',
          width: 110,
          render: (adc1_type: string, record: string, key: any) => {
            return (
              <Select key={adc1_type} defaultValue={adc1_type} style={{ width: '100%' }} onChange={(value) => handleSelect(value, key, 'adc1_type')}>
                <Option key={`${adc1_type}_1`} value="지진계">지진계</Option>
                <Option key={`${adc1_type}_2`} value="t-1">t-1</Option>
                <Option key={`${adc1_type}_3`} value="t-2">t-2</Option>
              </Select>
            );
          }
        },
        {
          title: '센서명',
          dataIndex: 'adc1_name',
          key: 'adc1_name',
          width: 110,
          render: (adc1_name: string, record: any, key: any) => {
            return (
              <Input key={adc1_name} defaultValue={adc1_name} style={{ width: '100%' }} onChange={(e: any) => handleInput(e, key, 'adc1_name')} />
            );
          }
        }
      ]
    },
    {
      title: 'adc2',
      key: 'adc2',
      children: [
        {
          title: '센서종류',
          dataIndex: 'adc2_type',
          key: 'adc2_type',
          width: 110,
          render: (adc2_type: string, record: string, key: any) => {
            return (
              <Select key={adc2_type} defaultValue={adc2_type} style={{ width: '100%' }} onChange={(value) => handleSelect(value, key, 'adc2_type')}>
                <Option key={`${adc2_type}_1`} value="구조물경사계">구조물경사계</Option>
                <Option key={`${adc2_type}_2`} value="t-1">t-1</Option>
                <Option key={`${adc2_type}_3`} value="t-2">t-2</Option>
              </Select>
            );
          }
        },
        {
          title: '센서명',
          dataIndex: 'adc2_name',
          key: 'adc2_name',
          width: 110,
          render: (adc2_name: string, record: any, key: any) => {
            return (
              <Input key={adc2_name} defaultValue={adc2_name} style={{ width: '100%' }} onChange={(e: any) => handleInput(e, key, 'adc2_name')} />
            );
          }
        }
      ]
    },
    {
      title: 'adc3',
      key: 'adc3',
      children: [
        {
          title: '센서종류',
          dataIndex: 'adc3_type',
          key: 'adc3_type',
          width: 110,
          render: (adc3_type: string, record: string, key: any) => {
            return (
              <Select key={adc3_type} defaultValue={adc3_type} style={{ width: '100%' }} onChange={(value) => handleSelect(value, key, 'adc3_type')}>
                <Option key={`${adc3_type}_1`} value="N/A">N/A</Option>
                <Option key={`${adc3_type}_2`} value="W-1">W-1</Option>
                <Option key={`${adc3_type}_3`} value="W-2">W-2</Option>
              </Select>
            );
          }
        },
        {
          title: '센서명',
          dataIndex: 'adc3_name',
          key: 'adc3_name',
          width: 110,
          render: (adc3_name: string, record: any, key: any) => {
            return (
              <Input key={adc3_name} defaultValue={adc3_name} style={{ width: '100%' }} onChange={(e: any) => handleInput(e, key, 'adc3_name')} />
            );
          }
        }
      ]
    },
    {
      title: 'adc4',
      key: 'adc4',
      children: [
        {
          title: '센서종류',
          dataIndex: 'adc4_type',
          key: 'adc4_type',
          width: 110,
          render: (adc4_type: string, record: string, key: any) => {
            return (
              <Select key={adc4_type} defaultValue={adc4_type} style={{ width: '100%' }} onChange={(value) => handleSelect(value, key, 'adc4_type')}>
                <Option key={`${adc4_type}_1`} value="N/A">N/A</Option>
                <Option key={`${adc4_type}_2`} value="W-1">W-1</Option>
                <Option key={`${adc4_type}_3`} value="W-2">W-2</Option>
              </Select>
            );
          }
        },
        {
          title: '센서명',
          dataIndex: 'adc4_name',
          key: 'adc4_name',
          width: 110,
          render: (adc4_name: string, record: any, key: any) => {
            return (
              <Input key={adc4_name} defaultValue={adc4_name} style={{ width: '100%' }} onChange={(e: any) => handleInput(e, key, 'adc4_name')} />
            );
          }
        }
      ]
    },
    {
      title: 'adcDiff12',
      key: 'adcDiff12',
      children: [
        {
          title: '센서종류',
          dataIndex: 'adcDiff12_type',
          key: 'adcDiff12_type',
          width: 110,
          render: (adcDiff12_type: string, record: string, key: any) => {
            return (
              <Select key={adcDiff12_type} defaultValue={adcDiff12_type} style={{ width: '100%' }} onChange={(value) => handleSelect(value, key, 'adcDiff12_type')}>
                <Option key={`${adcDiff12_type}_1`} value="N/A">N/A</Option>
                <Option key={`${adcDiff12_type}_2`} value="W-1">W-1</Option>
                <Option key={`${adcDiff12_type}_3`} value="W-2">W-2</Option>
              </Select>
            );
          }
        },
        {
          title: '센서명',
          dataIndex: 'adcDiff12_name',
          key: 'adcDiff12_name',
          width: 110,
          render: (adcDiff12_name: string, record: any, key: any) => {
            return (
              <Input key={adcDiff12_name} defaultValue={adcDiff12_name} style={{ width: '100%' }} onChange={(e: any) => handleInput(e, key, 'adcDiff12_name')} />
            );
          }
        }
      ]
    },
    {
      title: 'adcDiff34',
      key: 'adcDiff34',
      children: [
        {
          title: '센서종류',
          dataIndex: 'adcDiff34_type',
          key: 'adcDiff34_type',
          width: 110,
          render: (adcDiff34_type: string, record: string, key: any) => {
            return (
              <Select key={adcDiff34_type} defaultValue={adcDiff34_type} style={{ width: '100%' }} onChange={(value) => handleSelect(value, key, 'adcDiff12_type')}>
                <Option key={`${adcDiff34_type}_1`} value="N/A">N/A</Option>
                <Option key={`${adcDiff34_type}_2`} value="W-1">W-1</Option>
                <Option key={`${adcDiff34_type}_3`} value="W-2">W-2</Option>
              </Select>
            );
          }
        },
        {
          title: '센서명',
          dataIndex: 'adcDiff34_name',
          key: 'adcDiff34_name',
          width: 110,
          render: (adcDiff12_name: string, record: any, key: any) => {
            return (
              <Input key={adcDiff12_name} defaultValue={adcDiff12_name} style={{ width: '100%' }} onChange={(e: any) => handleInput(e, key, 'adcDiff34_name')} />
            );
          }
        }
      ]
    },
  ];

  return (
    <TableWrapper>
      <Table
        size="small"
        dataSource={data}
        columns={columns}
        bordered
        rowKey={(record: any) => record.node_id}
        pagination={{ pageSize: 10 }} />
    </TableWrapper>
  );
}
const TableWrapper = styled.div`
  & .custom-th {
    vertical-align: middle;
  }
`;
export default SensorTable;
