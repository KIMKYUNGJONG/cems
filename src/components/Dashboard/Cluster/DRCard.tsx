import React from 'react'
import { Dr, DrStateCode } from '../../../constant/Dashboard'
import Badge from '../../Common/Badge'

interface IProps {
    drData?: Dr
}
function DRCard({ drData }: IProps) {
    return (
        <div className='info'>
            <Badge name={DrStateCode[drData?.state as string]} />
            {/* <Badge name='자발성' /> */}
            <dl>
                <dt>감축량/낙찰량</dt>
                <dd>
                    {drData?.monthly_reduction} <span>kWh /</span> <br />
                    {drData?.monthly_succ_bid} <span>kWh</span>
                </dd>
            </dl>
        </div>
    )
}

export default DRCard
