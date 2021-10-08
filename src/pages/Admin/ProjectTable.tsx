import React from 'react';
import styled from 'styled-components';
import { Table, Space, Button, Popconfirm, message } from 'antd';

function ProjectTable({ dataSource, handleModify, handleDelete }: any) {
  console.log('ProjectTable dataSource', dataSource);


  function confirm(e: any, record: any) {
    console.log(record);
    handleDelete('project', record);
    // delete api 들어가야함.
    message.success('데이터 삭제 완료');
  }

  function cancel(e: any) {
    console.log(e);
    message.error('데이터 삭제 취소');
  }
  const columns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '프로젝트 명',
      dataIndex: 'name',
      key: 'project'
    },
    {
      title: 'Scene 이름',
      dataIndex: '',
      key: ''
    },
    {
      title: 'Application Id',
      dataIndex: 'application_id',
      key: 'application_id',
    },
    {
      title: 'SMS 번호',
      dataIndex: 'sms_number1',
      key: 'sms_number1',
    },
    {
      title: '',
      dataIndex: 'sms_number1',
      key: 'sms_number2',
    },
    // {
    //   title: 'SMS 번호',
    //   dataIndex: 'sms',
    //   key: 'sms',
    //   render: (sms: string[], record: any) => (
    //     <>
    //       {sms.map(list => {
    //         return (
    //           <Tag color={'green'} key={list}>
    //             {list.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: '생성일',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
    // {
    //   title: '사용자 ID',
    //   dataIndex: 'user_id',
    //   key: 'user_id',
    // },
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
      <Table size="small" rowKey={(record: any) => record.id} dataSource={dataSource} columns={columns} />
    </>
  );
}

const NoteText = styled.span`
  display: flex;
  width: 120px;
`;
export default ProjectTable;
