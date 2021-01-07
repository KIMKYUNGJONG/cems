import React, { ReactNode } from 'react'
import CircularBar from '../../Common/CircularBar'
import DrChart from '../../Common/DrChart'
interface IProps {
    chartInfo?: { value: number; text: string }
    drChartInfo?: {
        id: string
        monthly_reduction: string
        monthly_succ_bid: string
    }
    content: ReactNode
}

function CommonCard({ chartInfo, drChartInfo, content }: IProps) {
    return (
        <div className="company-data">
            <div className="chart">
                {chartInfo && (
                    <div className="circular">
                        <CircularBar
                            value={chartInfo?.value as number}
                            text={chartInfo?.text as string}
                            trail={'#E5E5E5'}
                            path={'#55B1FF'}
                        />
                    </div>
                )}
                {drChartInfo && (
                    // <div>
                    <DrChart
                        id={drChartInfo.id}
                        type={'site'}
                        monthly_reduction={drChartInfo.monthly_reduction}
                        monthly_succ_bid={drChartInfo.monthly_succ_bid}
                    />
                    // </div>
                )}
            </div>
            {content}
        </div>
    )
}

export default CommonCard
