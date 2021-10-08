import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Breadcrumb, Button } from 'antd';
import AddButton from '../../../components/Common/AddButton';
import SectionModal from '../ModModal/SectionModal';
import SectionTable from '../SectionTable';
import ButtonGroup from 'antd/lib/button/button-group';
import { SaveOutlined } from '@ant-design/icons';
//리덕스
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { setForm } from '../../../redux/sectionSlice';

export const SectionTab = () => {
  const fetchSection = useAppSelector(state => state.section);
  const { form } = fetchSection;
  const [sectionData, getData] = useState();
  // 현재는 리덕스 스테이트에서 가지고오고있음
  // 추후 api를 통한 백단에서 가지고 오도록 수정 getList()
  const dispatch = useAppDispatch();

  const handleForm = (type: string) => {
    dispatch(setForm({ type, mode: 'add', visible: true }));
  };

  const handleDelete = (type: string, record: any) => {
    //dispatch(deleteSection(record));
  };
  return (
    <>
      <SectionModal type={form.type} />
      <TitleWrapper>
        <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>공사구간 및 센서 관리</Breadcrumb.Item>
        </Breadcrumb>
      </TitleWrapper>
      <Contents>
        <SectionTable dataSource={fetchSection.section} />

        <ButtonWrapper>
          <ButtonGroup>
            <AddButton name={'공사구간 관리'} style={{ borderRadius: '10px' }} type={'section'} handleForm={handleForm} />
            <AddButton name={'임계치 관리'} style={{ borderRadius: '10px' }} type={'limiter'} handleForm={handleForm} />
          </ButtonGroup>
          <Button name={'저장'} shape="round" type={'primary'} onClick={() => { console.log('변경된 데이타 읽기', fetchSection.section); }}>
            <SaveOutlined /> 저장
          </Button>
        </ButtonWrapper>
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .ant-btn-group > button {
    margin-right: 6px !important;
    border-radius: 40px !important;
  }
`;