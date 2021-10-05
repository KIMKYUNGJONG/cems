import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import AddButton from '../../../components/Common/AddButton';
import AddModal from '../AddModal/AddModal';
import ProjectTable from '../ProjectTable';
//리덕스
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { setForm, deleteProject } from '../../../redux/projectSlice';

export const ProjectTab = () => {
  const fetchProject = useAppSelector(state => state.project);
  useEffect(() => {
    console.log(fetchProject, 'changed');
  }, [fetchProject]);
  const { form } = fetchProject;
  const [projectData, getData] = useState();
  // 현재는 리덕스 스테이트에서 가지고오고있음. 
  // 추후 api를 통한 백단에서 가지고 오도록 수정
  const dispatch = useAppDispatch();

  const handleForm = (type: string) => {
    dispatch(setForm({ type, mode: 'add', visible: true }));
  };
  const handleModify = (type: string, record: any) => {
    dispatch(setForm({ type, mode: 'modify', visible: true }));
    getData(record);
    console.log(record);
  };
  const handleDelete = (type: string, record: any) => {
    dispatch(deleteProject(record));
  };
  return (
    <>
      <AddModal type={form.type} handleData={projectData} />
      <TitleWrapper>
        <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>프로젝트 관리</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <AddButton name={'프로젝트 추가'} type={'project'} handleForm={handleForm} />
        </div>
      </TitleWrapper>
      <Contents>
        <ProjectTable dataSource={fetchProject.project} handleDelete={handleDelete} handleModify={handleModify} />
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
