import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tag, Space } from 'antd';

export const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    render: (text: string) => (<a>{text}</a>),
  },
  {
    title: 'Code',
    key: 'code',
    render: (text: string, record: any, index: number) => (
      <Space size="middle">
        <a>{record.code}</a>
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
];
