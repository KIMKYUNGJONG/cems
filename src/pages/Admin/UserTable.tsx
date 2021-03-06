import React from 'react';
import styled from 'styled-components';
import { Table, Tag, Space, Button, Popconfirm, message } from 'antd';

function UserTable({ dataSource, handleModify, handleDelete }: any) {
  function confirm(e: any, record: any) {
    console.log(record);
    handleDelete('user', record);
    message.success('데이터 삭제 완료');
  }
  console.log('UserTable data ', dataSource);
  function cancel(e: any) {
    console.log(e);
    message.error('데이터 삭제 취소');
  }
  const columns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '사용자 아이디',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '회사명',
      dataIndex: 'company_name',
      key: 'company_name'
    },
    {
      title: '담당자 명',
      dataIndex: 'manager_name',
      key: 'manager_name',
    },
    {
      title: '연락처',
      dataIndex: 'contact_number',
      key: 'contact_number',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '프로젝트 리스트',
      key: 'projectNameList',
      dataIndex: 'projectNameList',
      render: (projectNameList: string[], record: any) => (
        <>
          {projectNameList?.map(list => {
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
            handleModify('user', record);
          }}>정보변경</Button>
          <Popconfirm
            title="데이터를 삭제하시겠습니까?"
            onConfirm={(e) => confirm(e, record)}
            onCancel={cancel}
            okText="확인"
            cancelText="취소"
          >
            <Button type="primary" danger>삭제</Button>
          </Popconfirm>
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
