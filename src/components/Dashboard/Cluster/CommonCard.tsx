import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Current, Dr } from '../../../constant/Dashboard'
import CircularBar from '../../Common/CircularBar'
import DrChart from '../../Common/DrChart'

interface IProps {
    titleInfo: { title: string; usage: string }
    data?: Current | Dr
    content: ReactNode
    chartInfo?: { value: number; text: string }
    drChartInfo?: {
        id: string
        monthly_reduction: string
        monthly_succ_bid: string
    }
}

function CommonCard({ titleInfo, content, chartInfo, drChartInfo }: IProps) {
    return (
        <CommonBlock>
            <Title>
                <h4>{titleInfo.title}</h4>
                <div className="usage">
                    {titleInfo.usage} <span>kWh</span>
                </div>
            </Title>
            <Content>
                <div className="chart">
                    {chartInfo && (
                        <CircularBar
                            value={chartInfo?.value as number}
                            text={chartInfo?.text as string}
                        />
                    )}
                    {drChartInfo && (
                        <DrChart
                            id={drChartInfo.id}
                            type="cluster"
                            monthly_reduction={drChartInfo.monthly_reduction}
                            monthly_succ_bid={drChartInfo.monthly_succ_bid}
                        />
                    )}
                </div>
                {content}
            </Content>
        </CommonBlock>
    )
}

const CommonBlock = styled.div`
    padding-top: 16px;
    padding-bottom: 19px;
    border-bottom: 1px solid rgba(229, 229, 229, 0.1);
    letter-spacing: -0.45px;
    overflow: visible;
    // padding: 16px 20px 19px 20px;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        font-size: 14px;
        font-family: 'Noto Sans KR';
        font-weight: 500;
        color: white;
        letter-spacing: -1.55px;
    }
    .warning {
        font-size: 12px;
        font-weight: 700;
        padding: 3px 9px;
        border-radius: 24px;
        background-color: #d83535;
    }
    .usage {
        font-size: 18px;
        font-weight: 700;
        font-family: 'Roboto';
        color: #55b1ff;
        text-align: right;
        span {
            font-size: 13px;
            font-weight: 400;
        }
    }
`
const Content = styled.div`
    display: flex;
    margin-top: 16px;
    .chart {
        width: 80px;
        height: 80px;
    }
    .info {
        margin-left: 11px;
    }

    dt {
        font-family: 'Noto Sans KR';

        font-size: 13px;
        font-weight: 400;
        margin-bottom: 4px;
        letter-spacing: -2px;
    }
    dd {
        font-family: 'Roboto';

        font-size: 16px;
        font-weight: 700;
        &:not(:last-child) {
            margin-bottom: 14px;
        }
        .battery-icon {
            display: inline-block;
        }
        span {
            font-size: 13px;
            font-weight: 400;
        }
    }
`
export default CommonCard
