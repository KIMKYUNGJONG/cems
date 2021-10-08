/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Table, Input, Select, } from 'antd';
import { sensorData } from '../../constant/Admin';
import { updateSection } from '../../redux/sectionSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { debug } from 'console';
const { Option } = Select;

function SectionTable({ dataSource, handleSensorData }: any) {
  /**
   * 셀렉트로 프로젝트를 선택 할 시,
   * 해당 키워드로 백단과 통신을 한다
   * 해당 프로젝트에 대한 데이터 배열을 받는다
   * {projectName:'', data:[]}
   * data = [{...}]
   * data 부분만 테이블에 뿌려준다
   * data 부분만 업데이트를 한다. 업데이트 할 위치를 받기 위해서는
   * 해당하는 프로젝트의 아이디를 기억하고 해야한다.
   */
  const dispatch = useAppDispatch();
  const fetchSection = useAppSelector(state => state.section);
  useEffect(() => {
    console.log('changed', fetchSection.section);
  }, [fetchSection.section]);
  const [data, setData] = useState(fetchSection.section[0].asset);
  const [projectName, setPjName] = useState(fetchSection.section[0].projectName);
  //dataSource 는 [ {projectName, asset[] } ] 구조
  const handleProject = (value: any) => {
    fetchSection.section.map((project) => project.projectName === value ? setPjName(value) : console.log('error'));
  };

  const openInput = (e: any) => {
    e.target.disabled = false;
    e.target.focus();
  };

  function changeValue(obj: any, keyName: string, value: any) {
    const newValue: any = {};
    for (const key in obj) {
      if (key === keyName) {
        newValue[keyName] = value;
      }
    }
    return { ...obj, ...newValue };
  }
  function handleSelect(row: any, value: any, key: number, keyName: any) {
    const newData = [...data]; //fetchSection.section[0].asset
    const index = newData.findIndex((item: any) => row[keyName] === item[keyName]);
    const item = newData[index];
    const calcVal = changeValue(row, keyName, value);
    newData.splice(index, 1, {
      ...item,
      ...calcVal,
    });
    setData(newData);
    const sectionObj = {
      projectName,
      asset: newData
    };
    // asset을 넘긴다
    dispatch(updateSection(sectionObj));
  }
  // 셀렉트값 변경시
  function handleInput(row: any, e: any, key: number, keyName: any) {
    // 확실하게 구분 짓기
    e.target.disabled = true;
    const newData = [...data];
    const index = newData.findIndex((item: any) => row[keyName] === item[keyName]);
    const item = newData[index];
    const calcVal = changeValue(row, keyName, e.target.value);
    newData.splice(index, 1, {
      ...item,
      ...calcVal,
    });
    setData(newData);
    const sectionObj = {
      projectName,
      asset: newData
    };
    // asset을 넘긴다
    dispatch(updateSection(sectionObj));
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
          render: (adc1_type: string, record: any, key: any) => {
            return (
              <Select key={adc1_type} defaultValue={record.adc1_type} style={{ width: '100%' }} onChange={(value) => handleSelect(record, value, key, 'adc1_type')}>
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
              <Input key={adc1_name} disabled={false} defaultValue={record.adc1_name || ''} style={{ width: '100%' }}
                onClick={e => openInput(e)}
                onBlur={e => handleInput(record, e, key, 'adc1_name')} />
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
          render: (adc2_type: string, record: any, key: any) => {
            return (
              <Select key={adc2_type} defaultValue={record.adc2_type} style={{ width: '100%' }}
                onChange={(value) => handleSelect(record, value, key, 'adc2_type')}>
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
              <Input key={adc2_name} disabled={false} defaultValue={record.adc2_name} style={{ width: '100%' }}
                onClick={e => openInput(e)}
                onBlur={e => handleInput(record, e, key, 'adc2_name')} />
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
          render: (adc3_type: string, record: any, key: any) => {
            return (
              <Select key={adc3_type} defaultValue={record.adc3_type} style={{ width: '100%' }} onChange={(value) => handleSelect(record, value, key, 'adc3_type')}>
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
              <Input key={adc3_name} disabled={false} defaultValue={record.adc3_name} style={{ width: '100%' }}
                onClick={e => openInput(e)}
                onBlur={e => handleInput(record, e, key, 'adc3_name')} />
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
          render: (adc4_type: string, record: any, key: any) => {
            return (
              <Select key={adc4_type} defaultValue={record.adc4_type} style={{ width: '100%' }} onChange={(value) => handleSelect(record, value, key, 'adc4_type')}>
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
              <Input key={adc4_name} disabled={false} defaultValue={record.adc4_name} style={{ width: '100%' }}
                onClick={e => openInput(e)}
                onBlur={e => handleInput(record, e, key, 'adc4_name')} />
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
          render: (adcDiff12_type: string, record: any, key: any) => {
            return (
              <Select key={adcDiff12_type} defaultValue={record.adcDiff12_type} style={{ width: '100%' }} onChange={(value) => handleSelect(record, value, key, 'adcDiff12_type')}>
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
              <Input key={adcDiff12_name} disabled={false} defaultValue={record.adcDiff12_name} style={{ width: '100%' }}
                onClick={e => openInput(e)}
                onBlur={e => handleInput(record, e, key, 'adcDiff12_name')} />
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
          render: (adcDiff34_type: string, record: any, key: any) => {
            return (
              <Select key={adcDiff34_type} defaultValue={record.adcDiff34_type} style={{ width: '100%' }} onChange={(value) => handleSelect(record, value, key, 'adcDiff12_type')}>
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
          render: (adcDiff34_name: string, record: any, key: any) => {
            return (
              <Input key={adcDiff34_name} disabled={false} defaultValue={record.adcDiff34_name} style={{ width: '100%' }}
                onClick={e => openInput(e)}
                onBlur={e => handleInput(record, e, key, 'adcDiff34_name')} />
            );
          }
        }
      ]
    },
  ];
  return (
    <TableWrapper>
      <Select key={'Project_list'} defaultValue={projectName} style={{ width: '10%', marginBottom: '10px' }} onChange={(value) => handleProject(value)}>
        {dataSource.map((item: any) => {
          return <Option key={`${item.projectName}_1`} value={item.projectName}>{item.projectName}</Option>;
        })}
      </Select>
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
export default SectionTable;
