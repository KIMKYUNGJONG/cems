import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Breadcrumb, Tabs, Button } from 'antd';
import AddButton from '../../components/Common/AddButton';
import AntModal from '../../components/Modal/Modal';
import ModModal from '../../components/Modal/ModModal';
import SensorModal from '../../components/Modal/SensorModal';
import ProjectTable from './ProjectTable';
import UserTable from './UserTable';
import SensorTable from './SensorTable';
import { IUser, IProject } from './Interface';
import ButtonGroup from 'antd/lib/button/button-group';
import { SaveOutlined } from '@ant-design/icons';

//리덕스
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const { TabPane } = Tabs;
function callback(key: string) {
  console.log('탭 할때마다 해당 탭 데이터 가져올 수 있도록', key);
}

function Admin({ data, sampleData }: any) {
  console.log('api 샘플 데이터', sampleData.data);
  const { Content } = Layout;
  const [userData, setUserData] = useState(data[0]);
  const [projectData, setProjectData] = useState(data[1]);
  const [sensorData, setSensorData] = useState(data[2]);
  const [user, setUser] = useState<IUser | undefined>();
  const [project, setProject] = useState<IProject | undefined>();
  const [modVisible, setModModalOpen] = useState<boolean>(false);
  const [sensorVisible, setSensorModalOpen] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [formType, setFormType] = useState({
    label: ''
  });

  const handleForm = (type: string) => {
    setFormType({
      label: type
    });
    setIsModalVisible(true);
  };
  const handleVisible = () => {
    setIsModalVisible(false);
    setModModalOpen(false);
    setSensorModalOpen(false);
  };

  const handleSensorModal = (type: string) => {
    setFormType({
      label: type
    });
    setSensorModalOpen(!sensorVisible);
  };

  const handleProject = (item: any) => {
    const newProjectData = data[1].concat([item]);
    setProjectData(newProjectData);
    console.log('프로젝트 폼 데이터 확인 : ', data[1]);
  };

  const handleUser = (item: any) => {
    const newUserData = data[0].concat([item]);
    setUserData(newUserData);
    console.log('유저 폼 데이터 확인 : ', data[0]);
  };

  const handleSensor = (item: any) => {
    const newSensorData = data[2].concat([item]);
    setSensorData(newSensorData);
    console.log('센서장비 폼 데이터 확인 : ', data[2]);
  };

  const handleSensorData = (data: object) => {
    setSensorData(data);
  };

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
  const handleDelete = (type: string, record: any) => {
    (type === 'project') ? alert('프로젝트 삭제 (프로젝트ID) : ' + record.projectId) : alert('사용자 삭제 (사용자ID) : ' + record.id);
  };

  // useSelector (redux)
  const fetchUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  return (
    <AdminWrapper>
      <Layout>
        <Content className="site-layout" style={{ padding: '50px', overflow: 'auto' }}>
          <ModModal
            formType={formType}
            modVisible={modVisible}
            handleVisible={handleVisible}
            handleModify={handleModify}
            user={user}
            project={project}
          />
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
                  <AddButton name={'프로젝트 추가'} type={'project'} handleForm={handleForm} />
                </div>
              </TitleWrapper>
              <Contents>
                <ProjectTable dataSource={projectData} handleModify={handleModify} handleDelete={handleDelete} />
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
                  <AddButton name={'사용자 추가'} type={'user'} handleForm={handleForm} />
                </div>
              </TitleWrapper>
              <Contents>
                <UserTable dataSource={fetchUser} handleModify={handleModify} handleDelete={handleDelete} />
              </Contents>
            </TabPane>
            <TabPane tab="공사구간 및 센서" key="3">
              <TitleWrapper>
                <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>공사구간 및 센서 관리</Breadcrumb.Item>
                </Breadcrumb>
                <SensorModal
                  formType={formType}
                  sensorVisible={sensorVisible}
                  handleVisible={handleVisible}
                  handleSensor={handleSensor}
                />
              </TitleWrapper>
              <Contents>
                <SensorTable dataSource={sensorData} handleSensorData={handleSensorData} />
                <ButtonWrapper>
                  <ButtonGroup>
                    <AddButton name={'공사구간 관리'} type={'section'} handleForm={handleSensorModal} />
                    <AddButton name={'임계치 관리'} type={'limiter'} handleForm={handleSensorModal} />
                  </ButtonGroup>
                  <Button name={'저장'} style={{ borderRadius: '15' }} type={'primary'} onClick={() => { console.log('변경된 데이타 읽기', sensorData); }}>
                    <SaveOutlined /> 저장
                  </Button>
                </ButtonWrapper>
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
  max-width: 100vw;
  border-radius: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .ant-btn-group > button {
    margin-right: 6px !important;
  }
`;
export default Admin;
