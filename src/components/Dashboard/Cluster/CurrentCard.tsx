import React from 'react'
import { Current } from '../../../constant/Dashboard'
import CircularBar from '../../Common/CircularBar'

interface IProps {
    currentData?: Current
}

function CurrentCard({ currentData }: IProps) {
    return (
        <div className='info'>
            <dl>
                <dt>계약전력</dt>
                <dd>
                    {currentData?.contract_power} <span>MWh</span>
                </dd>
                <dt>금월 전체 전기요금</dt>
                <dd>
                    {currentData?.monthly_price} <span>원</span>
                </dd>
            </dl>
        </div>
    )
}

export default CurrentCard
