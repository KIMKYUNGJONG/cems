import React from 'react';
import styled from 'styled-components';
import { Table, Tag, Space, Button } from 'antd';

function ProjectTable({ dataSource, handleModify, handleDelete }: any) {
  const columns = [
    {
      title: '프로젝트 명',
      dataIndex: 'projectName',
      key: 'project'
    },
    {
      title: 'Scene 이름',
      dataIndex: 'scene',
      key: 'scene'
    },
    {
      title: 'Application Id',
      dataIndex: 'aplicationId',
      key: 'aplicationId',
    },
    {
      title: 'SMS 번호',
      dataIndex: 'sms',
      key: 'sms',
      render: (sms: string[], record: any) => (
        <>
          {sms.map(list => {
            return (
              <Tag color={'green'} key={list}>
                {list.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '생성일',
      dataIndex: 'regDate',
      key: 'regDate',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: '사용자 ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'ProjectId',
      dataIndex: 'projectId',
      key: 'projectId',
    },
    {
      title: '노트',
      dataIndex: 'note',
      key: 'note',
      render: (text: string) => {
        return <NoteText>{text}</NoteText>;
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          <Button type="primary" onClick={(event) => {
            handleModify('project', record);
          }}>정보변경</Button>
          <Button type="primary" danger onClick={(event) => {
            console.log('clickDelete');
            handleDelete('project', record);
          }}>삭제</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table size="small" dataSource={dataSource} columns={columns} />
    </>
  );
}

const NoteText = styled.span`
  display: flex;
  width: 120px;
`;
export default ProjectTable;
