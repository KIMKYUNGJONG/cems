import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Tabs } from 'antd';
import ModModal from '../../components/Modal/ModModal';
import { IUser, IProject } from './Interface';
import { UserTab } from './AdminTabs/User';
import { ProjectTab } from './AdminTabs/Project';
import { SectionTab } from './AdminTabs/Section';
//리덕스
import { useAppDispatch } from '../../redux/hooks';

const { TabPane } = Tabs;
function callback(key: string) {
  console.log('탭 할때마다 해당 탭 데이터 가져올 수 있도록', key);
}

function Admin({ data, sampleData }: any) {
  const { Content } = Layout;
  const [user, setUser] = useState<IUser | undefined>();
  const [project, setProject] = useState<IProject | undefined>();
  const [modVisible, setModModalOpen] = useState<boolean>(false);
  const [formType, setFormType] = useState({
    label: ''
  });
  const handleVisible = () => {
    setModModalOpen(false);
  };

  // 정보변경 클릭시
  const handleModify = (type: string, record: any) => {
    if (type === 'project') {
      setProject(record);
      setFormType({ label: 'project' });
    }
    else {
      setUser(record);
      setFormType({ label: 'user' });
    };
    console.log('정보변경 시 테이블 정보 읽어서 api call하기', type, record);
    setModModalOpen(true);
  };

  return (
    <AdminWrapper>
      <Layout>
        <Content className="site-layout" style={{ padding: '50px', overflow: 'auto' }}>
          <Tabs onChange={callback} type="card" className="custom-tabs" >
            <TabPane tab="프로젝트" key="1">
              <ProjectTab />
            </TabPane>
            <TabPane tab="사용자" key="2">
              <UserTab />
            </TabPane>
            <TabPane tab="공사구간 및 센서" key="3">
              <SectionTab />
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
export default Admin;
