import React, { useEffect, useState } from 'react'
import { useAsync } from 'react-async'
import { URLS } from '../constant/urls'
// import { apiGet } from '../lib/api'
import Dashboard from '../pages/Dashboard/Dashboard'
export const siteData2 = [
    {
        id: '0135162874',
        name: '서초문화예술회관',
        dr: {
            contract_capacity: '2,000',
            monthly_succ_bid: '2,000',
            monthly_reduction: '2,000',
            state: 'idle',
        },
        ess: {
            capacity: '2,000',
            monthly_charged: '2,000',
            monthly_discharged: '2,000',
            state: 'idle',
            SoC: '50',
            realtime_volume: 50,
        },
        pv: {
            capacity: '2,000',
            generation_power: '2,000',
            generation_hour: '2,000',
            generation_revenue: '2,000',
            generation_rate: 50,
        },
        energy: {
            contract_power: '2,000',
            current_power: '2,000',
            monthly_price: '2,000',
            utilization_rate: 50,
        },
    },
]
// const fetchClusterData = async ({ clusterId }: { clusterId: string }) => {
//     const res = await apiGet({ url: `${URLS.DASHBOARD_CLUSTER}/${clusterId}` })
//     return res.data
// }
// const fetchSiteData = async ({ clusterId }: { clusterId: string }) => {
//     const res = await apiGet({
//         url: `${URLS.DASHBOARD_CLUSTER}/${clusterId}/sites`,
//     })
//     return res.data
// }
// const fetchSiteInfo = async ({ clusterId }: { clusterId: string }) => {
//     const res = await apiGet({
//         url: `${URLS.SITE}/`,
//         params: { cluster_id: clusterId },
//     })
//     return res.data
// }
function DashboardContainer() {
    // let [count, setCount] = useState(0)

    // const clusterData = useAsync({
    //     deferFn: ([clusterId]) => fetchClusterData({ clusterId }),
    //     initialValue: { id: '', name: '' },
    // })
    // const siteData = useAsync({
    //     deferFn: ([clusterId]) => fetchSiteData({ clusterId }),
    //     initialValue: [],
    // })
    // const siteInfo = useAsync({
    //     deferFn: ([clusterId]) => fetchSiteInfo({ clusterId }),
    //     initialValue: [],
    // })

    // useEffect(() => {
    //     clusterData.run('sec_2020')
    //     siteData.run('sec_2020')
    //     siteInfo.run('sec_2020')
    //     setCount((c) => c + 1)

    //     let id = setInterval(() => {
    //         clusterData.run('sec_2020')
    //         siteData.run('sec_2020')
    //     }, 60000)
    //     return () => clearInterval(id)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <Dashboard
            clusterData={{
                data: siteData2[0],
                error: null,
                isLoading: false,
            }}
            siteData={{
                data: [],
                error: null,
                isLoading: false,
            }}
            siteInfo={{
                data: [],
                error: null,
                isLoading: false,
            }}
        />
    )
}

export default DashboardContainer
