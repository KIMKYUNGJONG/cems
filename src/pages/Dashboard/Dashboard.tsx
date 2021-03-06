import React from 'react';
import styled from 'styled-components';
import DashboardList from './DashboardList';
import DashboardMap from './DashboardMap';
import { defaultType } from './Interface';

function Dashboard({ data, pushdata, htValue, handleGraphView, scene, }: defaultType, props: any) {
  const getGraphView = (param: any) => {
    handleGraphView(param);
  };
  return (
    <DashboardWrapper>
      <DashboardList data={data} />
      <MapDiv>
        <DashboardMap pushdata={pushdata} getGraphView={getGraphView} scene={scene} />
      </MapDiv>
    </DashboardWrapper>
  );
}
const DashboardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const MapDiv = styled.div`
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
`;
export default Dashboard;
