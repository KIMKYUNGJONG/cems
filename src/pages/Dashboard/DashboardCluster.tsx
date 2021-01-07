import { Result, Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'
import DrChart from '../../components/Common/DrChart'
import ClusterInfo from '../../components/Dashboard/Cluster/ClusterInfo'
import CommonCard from '../../components/Dashboard/Cluster/CommonCard'
import CurrentCard from '../../components/Dashboard/Cluster/CurrentCard'
import DRCard from '../../components/Dashboard/Cluster/DRCard'
import ESSCard from '../../components/Dashboard/Cluster/ESSCard'
import PVCard from '../../components/Dashboard/Cluster/PVCard'
import TotalAmount from '../../components/Dashboard/Cluster/TotalAmount'
import { ClusterData } from '../../constant/Dashboard'

interface IProps {
    clusterData: ClusterData
}
function DashboardCluster({ clusterData }: IProps) {
    const { data, error, isLoading } = clusterData

    if (isLoading) {
        return (
            <ClusterBlock>
                <SpinBox>
                    <Spin size='large' style={{ position: 'relative', left: -15 }} tip='Loading...' />
                </SpinBox>
            </ClusterBlock>
        )
    }

    if (error) {
        return (
            <ClusterBlock>
                <SpinBox>
                    <Spin size='large' style={{ position: 'relative', left: -15 }} tip='Loading...' />
                </SpinBox>
            </ClusterBlock>
        )
    }

    if (data) {
        return (
            <ClusterBlock>
                <ClusterInfo />
                <TotalAmount />
                <ContentBlock>
                    {data.energy && (
                        <CommonCard
                            titleInfo={{
                                title: '현재사용량',
                                usage: data.energy.current_power,
                            }}
                            content={<CurrentCard currentData={data.energy} />}
                            chartInfo={{
                                value: data.energy.utilization_rate,
                                text: '전체이용율',
                            }}
                        />
                    )}
                    {data.pv && (
                        <CommonCard
                            titleInfo={{
                                title: '태양광 발전량',
                                usage: data.pv.generation_power,
                            }}
                            content={<PVCard pvData={data.pv} />}
                            chartInfo={{
                                value: data.pv.generation_rate,
                                text: '전체발전율',
                            }}
                        />
                    )}
                    {data.ess && (
                        <CommonCard
                            titleInfo={{
                                title: 'ESS 충방전량',
                                usage: data.ess.SoC,
                            }}
                            content={<ESSCard essData={data.ess} />}
                            chartInfo={{
                                value: data.ess.realtime_volume,
                                text: '전체사용율',
                            }}
                        />
                    )}
                    {data.dr && (
                        <CommonCard
                            titleInfo={{
                                title: '수요관리계약량',
                                usage: data.dr.contract_capacity,
                            }}
                            content={<DRCard drData={data.dr} />}
                            drChartInfo={{
                                id: data.id,
                                monthly_reduction: data.dr.monthly_reduction,
                                monthly_succ_bid: data.dr.monthly_succ_bid,
                            }}
                        />
                    )}
                </ContentBlock>
            </ClusterBlock>
        )
    }
    return null
}

const ClusterBlock = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 72px;
    width: 255px;
    height: 100%;
    background-color: ${(props) => props.theme.clusterBg};
    color: white;
    z-index: 2;
    // padding: 34px 0px 30px 0px;
    padding: 34px 20px 30px 20px;

    border-top-right-radius: 20px;
    z-index: 3;
    transition: all 0.3s ease-in-out;
`
const ContentBlock = styled.div`
    overflow-y: auto;
    max-height: calc(100% - 200px) !important;

    &::-webkit-scrollbar {
        width: 0;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`
const SpinBox = styled.div`
    position: absolute;
    top: 40%;
    left: 40%;
`
export default DashboardCluster
