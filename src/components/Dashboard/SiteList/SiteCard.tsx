import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Current, Dr, Ess, Pv } from '../../../constant/Dashboard'
import Icon from '../../Common/Icon'
import CommonCard from './CommonCard'
import CurrentCard from './CurrentCard'
import DRCard from './DRCard'
import ESSCard from './ESSCard'
import PVCard from './PVCard'
interface IProps {
    active: boolean
    title: string
    id: string
    current: Current
    ess?: Ess
    pv?: Pv
    dr?: Dr
    allCardOpened: boolean
}

function SiteCard({ title, id, active, allCardOpened, current, pv, ess, dr }: IProps) {
    const [listOpen, setListOpen] = useState(false)

    useEffect(() => {
        if (allCardOpened) {
            setListOpen(true)
        } else {
            setListOpen(false)
        }
    }, [allCardOpened])

    const onToggle = () => {
        setListOpen(!listOpen)
    }

    return (
        <CardBlock id={id} active={active}>
            <Title active={active}>{title}</Title>
            <Content opened={listOpen} active={active}>
                {[pv, ess, dr].some((type) => {
                    return type !== undefined
                }) && (
                    <ExpandBtn opened={listOpen} onClick={onToggle}>
                        <Icon name='ic_chevron_down' size='16px' />
                    </ExpandBtn>
                )}
                {current && (
                    <CommonCard
                        chartInfo={{
                            value: current.utilization_rate,
                            text: '이용율',
                        }}
                        content={<CurrentCard currentData={current} />}
                    />
                )}
                {pv && (
                    <CommonCard
                        chartInfo={{
                            value: pv.generation_rate,
                            text: '발전율',
                        }}
                        content={<PVCard pvData={pv} />}
                    />
                )}
                {ess && (
                    <CommonCard
                        chartInfo={{
                            value: ess.realtime_volume,
                            text: '사용율',
                        }}
                        content={<ESSCard essData={ess} />}
                    />
                )}
                {dr && (
                    <CommonCard
                        content={<DRCard drData={dr} />}
                        drChartInfo={{
                            id: `${id}-chart`,
                            monthly_reduction: dr.monthly_reduction,
                            monthly_succ_bid: dr.monthly_succ_bid,
                        }}
                    />
                )}
            </Content>
        </CardBlock>
    )
}

const Content = styled.div<{ opened: boolean; active: boolean }>`
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    padding-left: 13px;
    padding-right: 13px;
    background-color: ${(props) => props.theme.siteCardBg};
    max-height: ${(props) => (props.opened ? '1000px' : '116px')};
    border: ${(props) => (props.active ? `2px solid ${props.theme.activeSite}` : '')};

    transition: all 0.3s ease-in-out;
`
const CardBlock = styled.div<{ active: boolean }>`
    margin-bottom: 20px;
    width: 280px;

    .company-data {
        display: flex;
        padding: 24px 0px 14px 0px;

        &:not(:last-child) {
            border-bottom: 1px solid ${(props) => props.theme.siteDivider};
        }
        .chart {
            .circular {
                border-radius: 100%;

                background-color: ${(props) => props.theme.siteCardBg};
            }
            flex: 0 78px;
            height: 78px;
            // width: 78px;
        }

        .data {
            position: relative;
            flex: 1;
            margin-left: 16px;
            .main-data {
                color: #55b1ff;
                margin-bottom: 6px;
                line-height: 128.91%;
                dt {
                    font-size: 13px;
                    font-weight: 700;
                }
                dd {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    text-align: right;
                    span {
                        font-family: 'Noto Sans KR';
                        font-size: 12px;
                        font-weight: bold;
                    }
                }
            }

            .badge-container {
            }
            dl {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 4px;
                dt {
                    font-size: 12px;
                    font-family: 'Noto Sans KR';
                    letter-spacing: -2px;
                    margin-bottom: 4px;
                }
                dd {
                    text-align: right;
                    font-size: 14px;
                    font-weight: 600;
                    font-family: Roboto;

                    span {
                        font-size: 12px;
                        font-family: 'Noto Sans KR';
                        letter-spacing: normal;
                        font-size: 12px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
`
const ExpandBtn = styled.button<{ opened: boolean }>`
    display: flex;
    position: absolute;
    top: 5px;
    right: 6px;
    transform: ${(props) => (props.opened ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: all 0.3s ease-in-out;
`
const Title = styled.div<{ active: boolean }>`
    font-family: 'Noto Sans KR';

    font-size: 15px;
    font-weight: 500;
    margin-bottom: 9px;
    letter-spacing: -2px;
    ${(props) =>
        props.active &&
        css`
            font-weight: bold;
            color: #55b1ff;
        `}
`
export default SiteCard
