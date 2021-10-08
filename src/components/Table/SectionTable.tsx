import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space, Select } from 'antd';
import styled from 'styled-components';

// 샘플 테이블 데이터
/* eslint-disable camelcase */
const { Option } = Select;
const dummySelect: any[] = [];
for (let i = 0; i < 10; i++) {
  dummySelect.push(<Option key={i.toString(10) + i} value={`PJ_${i}`} >{`Node_${i}`}</Option>);
}

const SectionTable = ({ handleInputChange, handleSelectChange, handleDeleteRow, handleAddRow, handleSave, data }: any) => {
  const [value, setValue] = useState({});
  const SectionColumn = [
    {
      title: '공사구간명',
      dataIndex: 'section_name',
      key: 'section_name',
      align: 'center' as 'center',
      width: 100,
      render: (section_name: string) => {
        return (
          <Input key={section_name} defaultValue={section_name} onChange={(e) => handleInputChange(e.target.value)} />
        );
      }
    },
    {
      title: '노드 리스트',
      dataIndex: 'node_list',
      key: 'node_list',
      align: 'center' as 'center',
      width: 240,
      render: (node_list: string[]) => (
        <Select
          mode="multiple"
          size={'middle'}
          placeholder="Please select"
          defaultValue={node_list}
          onChange={(record, index) => handleSelectChange(record, index)}
          style={{ width: '100%' }}
        >
          {dummySelect}
        </Select>
      )
    },
    {
      title: '삭제',
      key: 'action',
      width: 80,
      render: (text: string, record: any, index: number) => (
        <Space size="middle">
          <Button type="primary" danger onClick={(event) => {
            handleDeleteRow(record.section_name, index);
          }}>삭제</Button>
        </Space>
      ),
    },
  ];
  return (
    <StWrapper>
      <Button onClick={handleAddRow}>열 추가</Button>
      <Table
        size="small"
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { console.log(record, rowIndex); }, // click row
          };
        }}
        columns={SectionColumn} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 180 }} />
      <Button onClick={handleSave}>저장</Button>

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

export default SectionTable;