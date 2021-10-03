import React from 'react';
import 'antd/dist/antd.css';
import { Space } from 'antd';

export const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    render: (text: string) => (<button>{text}</button>),
  },
  {
    title: 'Code',
    key: 'code',
    render: (text: string, record: any, index: number) => (
      <Space size="middle">
        <button>{record.code}</button>
      </Space>
    ),
  },
];

export const data = [
  {
    key: '1',
    project: 'project_10',
    code: ['108850'],
  },
  {
    key: '2',
    project: 'project_68',
    code: ['684550'],
  },
  {
    key: '3',
    project: 'project_19',
    code: ['198778'],
  },
  {
    key: '4',
    project: 'project_19',
    code: ['198778'],
  },
  {
    key: '5',
    project: 'project_19',
    code: ['198778'],
  },
  {
    key: '6',
    project: 'project_19',
    code: ['198778'],
  },
];
