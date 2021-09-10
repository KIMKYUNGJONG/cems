import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout, Breadcrumb, Table, Tag, Space, Button, Tabs, Form } from 'antd';
import AddButton from '../../components/Common/AddButton';
import AntModal from '../../components/Modal/Modal';
import ProjectTable from './ProjectTable';
import UserTable from './UserTable';

import { IUser, IProject } from './Interface';

const { TabPane } = Tabs;
function callback(key: string) {
  console.log('탭 할때마다 해당 탭 데이터 가져올 수 있도록', key);
}

function Admin({ data, sampleData }: any) {
  console.log('api 샘플 데이터', sampleData.data);
  const { Content } = Layout;
  const [projectData, setProjectData] = useState(data[1]);
  const [user, setUser] = useState<IUser | undefined>();
  const [project, setProject] = useState<IProject | undefined>();
  const [modVisible, setModModalOpen] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [formType, setFormType] = useState({
    label: ''
  });

  useEffect(() => {
    console.log('데이터 변경 관찰');
    console.log(data);
    return () => {
      console.log('데이터 변경 관찰');
      console.log(data);
    };
  }, [data]);

  const handleVisible = () => {
    setIsModalVisible(false);
  };

  const handleProject = (item: any) => {
    const newProjectData = data[1].concat([item]);
    setProjectData(newProjectData);
    console.log('프로젝트 폼 데이터 확인 : ', data[1]);
  };

  const handleUser = (item: any) => {
    data[0].concat([item]);
    console.log('유저 폼 데이터 확인 : ', data[0]);
  };

  const handleInfomation = (type: string, record: any) => {
    (type === 'project') ? setProject(record) : setUser(record);
    console.log(type, record);
    setModModalOpen(true);
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
                  formType={formType}
                  isModalVisible={isModalVisible}
                  handleVisible={handleVisible}
                  handleProject={handleProject}
                />
                <div>
                  <AddButton name={'프로젝트 추가'} icon={'project'} handleForm={handleForm} />
                </div>
              </TitleWrapper>
              <Contents>
                <ProjectTable modVisible={modVisible} dataSource={projectData} handleInfomation={handleInfomation} />
              </Contents>
            </TabPane>
            <TabPane tab="사용자" key="2">
              <TitleWrapper>
                <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>사용자 관리</Breadcrumb.Item>
                </Breadcrumb>
                <AntModal
                  formType={formType}
                  isModalVisible={isModalVisible}
                  handleVisible={handleVisible}
                  handleUser={handleUser}
                />
                <div>
                  <AddButton name={'사용자 추가'} icon={'user'} handleForm={handleForm} />
                </div>
              </TitleWrapper>
              <Contents>
                <UserTable modVisible={modVisible} dataSource={data[0]} handleInfomation={handleInfomation} />
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
