import React from 'react'
import { Current } from '../../../constant/Dashboard'

interface IProps {
    currentData: Current
}

function CurrentCard({ currentData }: IProps) {
    return (
        <div className='data'>
            <dl className='main-data'>
                <dt>현재사용량</dt>
                <dd>
                    {currentData.current_power} <span>kWh</span>
                </dd>
            </dl>
            <dl className='sub-data'>
                <dt>계약전력</dt>
                <dd>
                    {currentData.contract_power} <span>kWh</span>
                </dd>
            </dl>
            <dl className='sub-data'>
                <dt>금월전기요금</dt>
                <dd>
                    {currentData.monthly_price} <span>원</span>
                </dd>
            </dl>
        </div>
    )
}

export default CurrentCard
