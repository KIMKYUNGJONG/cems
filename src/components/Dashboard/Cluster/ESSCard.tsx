import React from 'react'
import { Ess, EssStateCode } from '../../../constant/Dashboard'
import Badge from '../../Common/Badge'

interface IProps {
    essData?: Ess
}

function ESSCard({ essData }: IProps) {
    return (
        <div className='info'>
            <Badge name={EssStateCode[essData?.state as string]} />
            <dl>
                <dt>ESS용량</dt>
                <dd>
                    {essData?.capacity} <span>MWh</span>
                </dd>
                <dt>월 충전량/방전량</dt>
                <dd>
                    {essData?.monthly_charged} <span>kWh</span> <span>/</span> <br /> {essData?.monthly_discharged}{' '}
                    <span>kWh</span>
                </dd>
            </dl>
        </div>
    )
}

export default ESSCard
