import React from 'react';
import { Table } from 'antd';

function ReportTable({ dataSource, columns }: any) {
  return (
    <>
      <Table size="small"
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        scroll={{ y: '10vh' }}
      />
    </>
  );
}

export default ReportTable;
