import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Breadcrumb, Table, Tag, Space, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import AddButton from '../../components/Common/AddButton';
import AntDrawer from '../../components/Drawer/Drawer';
import AntModal from '../../components/Modal/Modal';

import { IDrawer, IUser } from '../../constant/Admin';

function Admin({ dataSource }: any) {
  const { Header, Footer, Sider, Content } = Layout;
  const [value, setValue] = useState<IUser>({
    key: 0,
    name: '',
    age: 0,
    address: '',
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [formType, setFormType] = useState({
    label: ''
  });

  const handleOk = (form: any) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormValue = (value: any) => {
    console.log(value);
  };
  const handleTagClick = (record: IUser) => {
    setValue(record);
    setVisible(true);
    console.log(record);
  };

  const handleForm = (type: string) => {
    setFormType({
      label: type
    });
    setIsModalVisible(true);
    console.log('event activate');
  };

  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[], record: any) => (
        <>
          {tags.map(tag => {
            const color = tag.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          <button onClick={(event) => {
            console.log('clickModify');
            handleTagClick(record);
          }}>Modify</button>
          <button onClick={(event) => {
            console.log('clickDelete');
            alert('delete function');
          }}>Delete</button>
        </Space>
      ),
    },
  ];

  return (
    <AdminWrapper>
      <Layout>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 40 }}>
          <TitleWrapper>
            <Breadcrumb className="page-title" style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Admin Page</Breadcrumb.Item>
            </Breadcrumb>
            <AntModal formType={formType} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} handleFormValue={handleFormValue} />
            <AntDrawer visible={visible} onClose={onClose} data={value} />
            <div>
              <AddButton name={'Add User'} icon={'user'} handleForm={handleForm} />
              <AddButton name={'Add Project'} icon={'project'} handleForm={handleForm} />
            </div>
          </TitleWrapper>
          <Contents>
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => { console.log(event, record); }, // click row
                };
              }}
              dataSource={dataSource} columns={columns} />;
          </Contents>
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
  border-radius: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Admin;
