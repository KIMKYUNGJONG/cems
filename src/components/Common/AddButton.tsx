import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { UserAddOutlined, ProjectOutlined } from '@ant-design/icons';

function AddButon({ name, icon, handleForm }: any) {
  return (
    <Button onClick={() => { (icon === 'user') ? handleForm('user') : handleForm('project'); }} style={{ margin: 5 }} type="primary" shape="round" icon={(icon === 'user') ? <UserAddOutlined /> : <ProjectOutlined />} size={'large'}>
      {name}
    </Button>
  );
};

export default AddButon;
