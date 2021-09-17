import axios from 'axios';
import React, { useEffect } from 'react';
import { useAsync } from 'react-async';
import { apiGet } from '../lib/api';
import Admin from '../pages/Admin/Admin';
import { dataSource } from '../constant/Admin';

const fetchClusterData = async () => {
  const res = await apiGet({
    url: 'https://gorest.co.in/public-api/comments',
  });
  return res.data;
};

function AdminContainer(props: any) {
  const clusterData = useAsync({
    deferFn: fetchClusterData,
    initialValue: [],
  });

  useEffect(() => {
    clusterData.run();
  }, []);
  return <Admin data={dataSource} sampleData={clusterData.data} />;
}

export default AdminContainer;
