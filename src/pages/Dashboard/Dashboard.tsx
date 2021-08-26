import React from 'react';
import styled from 'styled-components';
import DashboardEx from './DashboardEx';
import DashboardMap from './DashboardMap';

type defaultType = { 
  htValue: any;
  handleGraphView:Function;
  scene: string;
  data: any;
  pushdata: [{ tag:string, data:object[] }]
}

function Dashboard({data, pushdata, htValue, handleGraphView, scene}:defaultType) {
  const getGraphView = (param:any) => {
    handleGraphView(param);
  };
  return (
    <DashboardWrapper>
      <DashboardEx data={data.data} htValue={htValue} scene={scene} />
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
