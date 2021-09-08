import React, { useState } from 'react';
import { Drawer, Tabs } from 'antd';
import { IDrawer, IUser } from '../../constant/Admin';

const { TabPane } = Tabs;
function callback(key: string) {
  console.log(key);
}
const AntDrawer = (props: IDrawer) => {
  const { data, onClose, visible } = props;
  return (
    <>
      <Drawer title="User Info" placement="right" onClose={onClose} visible={visible}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            <p>USERID : {data?.key}</p>
            <p>USERNAME : {data?.name}</p>
            <p>USERAGE : {data?.age}</p>
            <p>USERADDRESS : {data?.address}</p>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Drawer>
    </>
  );
};

export default AntDrawer;