import React from 'react'
import styled from 'styled-components'
import Icon from '../../Common/Icon'

function TotalAmount() {
    return (
        <AccumulatedTotalContainer>
            <h2>금일 누적</h2>
            <h3>신재생에너지 발전 총금액</h3>
            <div className='total-section'>
                <Icon name='ic_acumulated_total' />
                <div className='total'>
                    84,337.5
                    <span>만원</span>
                </div>
            </div>
        </AccumulatedTotalContainer>
    )
}
const AccumulatedTotalContainer = styled.div`
    margin-top: 24px;

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: white;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -1.85px;
    }

    h3 {
        font-size: 14px;
        font-weight: 700;
        margin-top: 5px;
        color: white;
        /* line-height: 24px; */
        letter-spacing: -1.85px;
    }

    .total-section {
        display: flex;
        justify-content: space-between;
        // align-items: center;
        margin-top: 16px;
        padding-bottom: 11px;
        border-bottom: 1px solid rgba(229, 229, 229, 0.5);
        .total {
            font-size: 30px;
            font-weight: 400;
            span {
                font-size: 14px;
                /* font-family: 'Roboto'; */
            }
        }
    }
`
export default TotalAmount
