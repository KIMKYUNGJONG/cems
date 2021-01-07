import React, { useState } from 'react'
import styled from 'styled-components'
import { ClusterData, SiteData, SiteInfo } from '../../constant/Dashboard'
import DashboardCluster from './DashboardCluster'
import DashboardMap from './DashboardMap'
import DashboardSiteList from './DashboardSiteList'

interface IProps {
    clusterData: ClusterData
    siteData: SiteData
    siteInfo: SiteInfo
}
function Dashboard({ clusterData, siteData, siteInfo }: IProps) {
    const [activeSite, setActiveSite] = useState(null)

    return (
        <>
            <MapDiv>
                <DashboardMap setActiveSite={setActiveSite} siteInfo={siteInfo} />
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
