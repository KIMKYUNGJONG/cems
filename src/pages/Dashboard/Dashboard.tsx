import React from 'react'
import styled from 'styled-components'
import DashboardMap from './DashboardMap'

function Dashboard() {
    return (
        <>
            <MapDiv>
                <DashboardMap />
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
