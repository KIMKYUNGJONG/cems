import React from 'react'
import { Pv } from '../../../constant/Dashboard'

interface IProps {
    pvData: Pv
}
function PVCard({ pvData }: IProps) {
    return (
        <div className='data'>
            <dl className='main-data'>
                <dt>태양광발전량</dt>
                <dd>
                    {pvData.generation_power} <span>kWh</span>
                </dd>
            </dl>
            <dl>
                <dt>설치용량</dt>
                <dd>
                    {pvData.capacity} <span>kWh</span>
                </dd>
            </dl>
            <dl>
                <dt>발전시간/수익</dt>
                <dd>
                    {pvData.generation_hour}
                    <span>시간</span> <span>/</span> <br />
                    {pvData.generation_revenue} <span>백만원</span>
                </dd>
            </dl>
        </div>
    )
}

export default PVCard
