import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Table, Button } from 'antd';
import { drawSensor } from '../../components/Common/DynamicColumn';

function SensorTable({ dataSource, handleModify, handleDelete }: any) {
  console.log(dataSource[0].data);
  const { nodeId, fac } = dataSource[0].data;
  const [column, setColumn] = useState<any>(drawSensor(fac));
  const data = [];
  for (let i = 0; i < fac.length; i++) {
    data.push({
      key: i,
      nodeId: nodeId,
      sensorType: fac[i].sensorType,
      sensorName: fac[i].sensorName,
    });
  }

  return (
    <Table
      size="small"
      dataSource={data}
      columns={column}
      bordered
      pagination={{ pageSize: 10 }} />
  );
}

export default SensorTable;
