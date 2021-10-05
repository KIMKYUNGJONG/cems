import React, { useEffect } from 'react';
import Admin from '../pages/Admin/Admin';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getUserList } from '../redux/userSlice';
import { getProjectList } from '../redux/projectSlice';
// fetchUserData, fetchProjectData 리덕스 슬라이스로 이동

function AdminContainer(props: any) {
  const dispatch = useAppDispatch();
  const fetchUserList = useAppSelector((state:any) => state.user.user);
  const fetchProjectList = useAppSelector((state:any)=> state.project.project);
  useEffect(() => {
    dispatch(getUserList());
    dispatch(getProjectList());
    console.log(fetchUserList, '====fetchUserList');
    console.log(fetchProjectList, '====fetchProjectList');
  }, [dispatch]);

  return <Admin users={fetchUserList} projects={fetchProjectList} />;
}

export default AdminContainer;
