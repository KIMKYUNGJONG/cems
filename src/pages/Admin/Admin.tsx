import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout, Breadcrumb, Table, Tag, Space, Button, Tabs } from 'antd';
import AddButton from '../../components/Common/AddButton';
import AntModal from '../../components/Modal/Modal';
import ProjectTable from './ProjectTable';
import UserTable from './UserTable';

import { IUser } from './Interface';

const { TabPane } = Tabs;
function callback(key: string) {
  console.log(key);
}

function Admin({ data, sampleData }: any) {
  console.log('api 서버통신 데이터', sampleData.data);
  const { Content } = Layout;
  const [value, setValue] = useState<IUser | undefined>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [formType, setFormType] = useState({
    label: ''
  });

  useEffect(() => {
    console.log('value 값이 설정됨');
    console.log(value);
    return () => {
      console.log('value 가 바뀌기 전..');
      console.log(value);
    };
  }, [value]);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = (form: any) => {
    setIsModalVisible(false);
  };
  const handleFormValue = (item: any) => {
    console.log('폼에서 가지고 온 데이터 확인 : ', item);
  };
  const handleInfomation = (record: IUser) => {
    setValue(record);
    console.log('테이블 로우 클릭시 가지고 오는 데이터 확인 : ', record);
    setIsModalVisible(true);
  };
  const handleForm = (type: string) => {
    setFormType({
      label: type
    });
    setIsModalVisible(true);
    console.log('event activate');
  };

  return (
    <AdminWrapper>
      <Layout>
        <Content className="site-layout" style={{ padding: '50px' }}>
          <Tabs onChange={callback} type="card" className="custom-tabs" >
            <TabPane tab="프로젝트" key="1">
              <TitleWrapper>
                <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>프로젝트 관리</Breadcrumb.Item>
                </Breadcrumb>
                <AntModal
                  value={value}
                  formType={formType}
                  isModalVisible={isModalVisible}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  handleFormValue={handleFormValue}
                />
                <div>
                  <AddButton name={'프로젝트 추가'} icon={'project'} handleForm={handleForm} />
                </div>
              </TitleWrapper>
              <Contents>
                <ProjectTable dataSource={data[1]} handleInfomation={handleInfomation} />
              </Contents>
            </TabPane>
            <TabPane tab="사용자" key="2">
              <TitleWrapper>
                <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>사용자 관리</Breadcrumb.Item>
                </Breadcrumb>
                <AntModal
                  value={value}
                  formType={formType}
                  isModalVisible={isModalVisible}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  handleFormValue={handleFormValue}
                />
                <div>
                  <AddButton name={'사용자 추가'} icon={'user'} handleForm={handleForm} />
                </div>
              </TitleWrapper>
              <Contents>
                <UserTable dataSource={data[0]} handleInfomation={handleInfomation} />
              </Contents>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </AdminWrapper>
  );
}


const AdminWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & section {
    height: calc(100vh - 60px);
    margin-top: 60px;

    & .custom-tabs {
      background-color: ${(props) => props.theme.clusterBg};
      padding: 10px;
      border-radius: 10px;
    }

    & .page-title {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
`;

const Contents = styled.div`
  background: #ffffff;
  padding: 24px;
  min-height: 380px;
  border-radius: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;

const NoteText = styled.span`
  display: flex;
  width: 120px;
`;
export default Admin;
