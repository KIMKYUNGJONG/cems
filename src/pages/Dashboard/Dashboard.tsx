import React from 'react'
import styled from 'styled-components'
import DashboardEx from './DashboardEx'
import DashboardMap from './DashboardMap'

function Dashboard(props:any) {
    const getGraphView = (param:any) => {
        props.handleGraphView(param);
    }
    return (
        <>
            <DashboardEx data={props.data.data} htValue={props.htValue} scene={props.scene} />
            <MapDiv>
                <DashboardMap pushdata={props.pushdata} getGraphView={getGraphView} scene={props.scene} />
            </MapDiv>
        </>
    )
}
const MapDiv = styled.div`
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
`
export default Dashboard
