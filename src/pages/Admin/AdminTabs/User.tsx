import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import AddButton from '../../../components/Common/AddButton';
import AddModal from '../AddModal/AddModal';
import UserTable from '../UserTable';
//리덕스
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { setForm } from '../../../redux/userSlice';

export const UserTab = () => {
  const fetchUser = useAppSelector(state => state.user);
  useEffect(() => {
    console.log(fetchUser, 'changed');
  }, [fetchUser]);
  const { form } = fetchUser;
  const [userData, getData] = useState();
  // 현재는 리덕스 스테이트에서 가지고오고있음. 
  // 추후 api를 통한 백단에서 가지고 오도록 수정
  const dispatch = useAppDispatch();

  const handleForm = (type: string) => {
    dispatch(setForm({ type, mode: 'add', visible: true }));
  };
  const handleModify = (type:string, record:any) => {
    dispatch(setForm({ type, mode: 'modify', visible: true }));    
    getData(record);
    console.log(record);
  };
  return (
    <>
      <AddModal type={form.type} handleData={userData} />
      <TitleWrapper>
        <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>사용자 관리</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <AddButton name={'사용자 추가'} type={'user'} handleForm={handleForm} />
        </div>
      </TitleWrapper>
      <Contents>
        <UserTable dataSource={fetchUser.user} handleModify={handleModify}/>
      </Contents>
    </>
  );
};


const Contents = styled.div`
  background: #ffffff;
  padding: 24px;
  min-height: 380px;
  max-width: 100vw;
  border-radius: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;
