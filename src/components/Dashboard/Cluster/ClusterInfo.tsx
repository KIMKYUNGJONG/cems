import React from 'react'
import styled from 'styled-components'

function ClusterInfo() {
    const today = new Date()
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <>
            <ClusterNameText>SEC2020</ClusterNameText>
            <InfostatusContainer>
                {dateString} {today.getHours()}시 운전현황
            </InfostatusContainer>
        </>
    )
}
const ClusterNameText = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: -1px;
`
const InfostatusContainer = styled.div`
    display: block;
    margin-top: 16px;
    width: 100%;
    color: white;
    border: 1px solid white;
    padding: 6px 28px;
    border-radius: 24px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    letter-spacing: -1.5px;
    line-height: 24px;
`
export default ClusterInfo
