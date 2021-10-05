import React from 'react';
import styled from 'styled-components';
import { Table, Tag, Space, Button, Popconfirm, message } from 'antd';

function ProjectTable({ dataSource, handleModify, handleDelete }: any) {
  function confirm(e: any, record: any) {
    console.log(record);
    handleDelete('project', record);
    message.success('데이터 삭제 완료');
  }

  function cancel(e: any) {
    console.log(e);
    message.error('데이터 삭제 취소');
  }
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
          {
            sms.length > 0 ?
              sms.map(list => {
                return (
                  <Tag color={'green'} key={list}>
                    {list}
                  </Tag>
                );
              }) : null
          }
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
