import axios from 'axios';
import React, { useEffect } from 'react';
import { useAsync } from 'react-async';
import { apiGet } from '../lib/api';
import Admin from '../pages/Admin/Admin';
import { dataSource } from '../constant/Admin';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getList } from '../redux/userSlice';

const fetchClusterData = async () => {
  const res = await apiGet({
    url: 'https://gorest.co.in/public-api/comments',
  });
  return res.data;
};

function AdminContainer(props: any) {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state:any) => state.userReducer);

  const clusterData = useAsync({
    deferFn: fetchClusterData,
    initialValue: [],
  });

  useEffect(() => {
    clusterData.run();
    dispatch(getList());
  }, []);
  return <Admin data={dataSource} sampleData={clusterData.data} />;
}

export default AdminContainer;
