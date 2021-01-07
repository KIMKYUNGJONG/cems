import React from 'react'
import { Dr, DrStateCode } from '../../../constant/Dashboard'
import Badge from '../../Common/Badge'

interface IProps {
    drData: Dr
}

function DRCard({ drData }: IProps) {
    return (
        <div className='data'>
            <dl className='main-data'>
                <dt>수요관리계약량</dt>
                <dd>
                    {drData.contract_capacity} <span>kWh</span>
                </dd>
            </dl>
            <div className='badge-container'>
                {drData?.state === 'both' ? (
                    <>
                        <Badge small color='#55B1FF' name='신뢰성' />
                        <Badge small color='#55B1FF' name='자발성' />
                    </>
                ) : (
                    <Badge small color='#55B1FF' name={DrStateCode[drData.state as string]} />
                )}
            </div>
            <dl>
                <dt>감축량/낙찰량</dt>
                <dd>
                    {drData.monthly_reduction} <span>kWh</span> <span>/</span> {drData.monthly_succ_bid}{' '}
                    <span>kWh</span>
                </dd>
            </dl>
        </div>
    )
}

export default DRCard
