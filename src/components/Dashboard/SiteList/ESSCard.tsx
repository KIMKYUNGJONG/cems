import React from 'react'
import { Ess, EssStateCode } from '../../../constant/Dashboard'
import Badge from '../../Common/Badge'

interface IProps {
    essData: Ess
}

function ESSCard({ essData }: IProps) {
    return (
        <div className='data'>
            <dl className='main-data'>
                <dt>ESS충방전량</dt>
                <dd>
                    {essData.realtime_volume} <span>kWh</span>
                </dd>
            </dl>
            <div className='badge-container'>
                <Badge small color='#55B1FF' name={EssStateCode[essData.state]} />
            </div>
            <dl>
                <dt>ESS용량</dt>
                <dd>
                    {essData.capacity} <span>kWh</span>
                </dd>
            </dl>
            <dl>
                <dt>월충전량/방전량</dt>
                <dd>
                    {essData.monthly_charged} <span>kWh</span> <span>/</span> {essData.monthly_discharged}
                    <span>kWh</span>
                </dd>
            </dl>
        </div>
    )
}

export default ESSCard
