import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table as AtTable } from 'antd';
import styled from 'styled-components';
// 샘플 테이블 데이터
import { columns, data } from '../../components/Table/SampleTable';

interface IProps {
  data?: object[];
  columns?: object[];
  handleClick?: Function;
}

const Table = ({ handleClick }: IProps) => {
  const [value, setValue] = useState({});
  const handleRowClick = (record: object) => {
    setValue(record);
  };

  console.log(value);
  return (
    <StWrapper>
      <AtTable
        size="small"
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { handleRowClick(record); }, // click row
          };
        }}
        columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 180 }} />
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

export default Table;