import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import styled from 'styled-components';
import { handleSave } from '../Modal/SensorModal';

// 샘플 테이블 데이터
interface IProps {
  data?: object[];
  columns?: object[];
  handleClick?: Function;
}

const CustomTable = ({ columns, data }: any) => {
  const [value, setValue] = useState({});
  const handleRowClick = (record: object) => {
    setValue(record);
  };

  console.log(value);
  return (
    <StWrapper>
      <Table
        size="small"
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { handleRowClick(record); }, // click row
          };
        }}
        columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 180 }} />
      <Button onClick={() => handleSave(value)}>저장</Button>

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

export default CustomTable;