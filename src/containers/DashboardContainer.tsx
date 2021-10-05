/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-async';
import { apiGet, ipGet } from '../lib/api';
import Dashboard from '../pages/Dashboard/Dashboard';
import { Data } from '../constant/Dashboard';
import { setPriority } from 'os';


const fetchClusterData = async () => {
  const res = await apiGet({
    url: 'https://gorest.co.in/public-api/comments',
  });
  return res.data;
};
const URL = 'ws://localhost:5000';

// 더미데이터
const data: Data =
{
  project: 'PJ_0917',
  aplicationId: '11',
  coords: ['10.15151', '10.15151'],
  regDate: '2021-08-30',
  userId: 'sma_01',
  sms: ['010-666-6666', '010-555-5555'],
  note: 'sample demo'
};

function DashboardContainer(props: any) {
  const clusterData = useAsync({
    deferFn: fetchClusterData,
    initialValue: [],
  });
  const [ui_data, setUi_data] = useState<Data[]>([]);
  useEffect(() => {
    clusterData.run();
  }, []);
  return (
    <Dashboard
      data={data}
      pushdata={[{ 'tag': 'dataPanel1', 'data': ui_data }]}
      htValue={props.htValue}
      handleGraphView={props.handleGraphView}
      scene={props.scene}
    />
  );
}

export default DashboardContainer;
