import React from 'react';
import styled from 'styled-components';
import { Table, Tag, Space, Button } from 'antd';

function UserTable({ dataSource, handleModify, handleDelete }: any) {
  const columns = [
    {
      title: '사용자 아이디',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '회사명',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: '담당자 명',
      dataIndex: 'manager',
      key: 'manager',
    },
    {
      title: '연락처',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '프로젝트 리스트',
      key: 'project',
      dataIndex: 'project',
      render: (projectList: string[], record: any) => (
        <>
          {projectList.map(list => {
            const color = list.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={list}>
                {list.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
            console.log('clickModify');
            handleModify('user', record);
          }}>정보변경</Button>
          <Button type="primary" danger onClick={(event) => {
            handleDelete('user', record);
          }}>삭제</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table size="small" dataSource={dataSource} columns={columns} />
  );
}

const NoteText = styled.span`
  display: flex;
  width: 120px;
`;
export default UserTable;
