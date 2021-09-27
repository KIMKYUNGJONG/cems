const columns = [
  {
    title: '노드 ID',
    dataIndex: 'nodeId',
    key: 'nodeId',
    align: 'center',
    width: 100,
  },

];
let newColumns: any[] = [];

export const drawSensor = (data: any) => {
  data.forEach((item: any) => {
    const obj = {
      title: item.name,
      children: [
        {
          title: '센서종류',
          dataIndex: 'sensorType',
          key: 'sensorType',
          align: 'center',
          width: 80
        },
        {
          title: '센서명',
          dataIndex: 'sensorName',
          key: 'sensorName',
          align: 'center',
          width: 80
        },
      ],
    };
    newColumns = [...newColumns, ...[obj]];
  });
  console.log([...columns, ...newColumns]);
  return [...columns, ...newColumns];
};
