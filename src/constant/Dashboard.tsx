
export interface AsyncData {
    error?: Error | null
    isLoading: boolean
}
export interface ClusterData extends AsyncData {
    data: Data
}
export interface SiteData extends AsyncData {
    data: Data[]
}

export interface SiteInfo extends AsyncData {
    data: Site[]
}
export interface Data {
    id: string
    name: string
    dr?: Dr
    energy: Current
    pv?: Pv
    ess?: Ess
}
export interface Current {
    contract_power: string
    current_power: string
    monthly_price: string
    utilization_rate: number
}
export interface Dr {
    contract_capacity: string
    monthly_succ_bid: string
    monthly_reduction: string
    state: string
}
export interface Ess {
    capacity: string
    monthly_charged: string
    monthly_discharged: string
    state: string
    SoC: string
    realtime_volume: number
}
export interface Pv {
    capacity: string
    generation_power: string
    generation_hour: string
    generation_revenue: string
    generation_rate: number
}
export interface Site {
    [index: string]: string | number | boolean
    id: string
    name: string
    latitude: number
    longitude: number
    is_dr: boolean
    is_ess: boolean
    is_pv: boolean
}
export const clusterCard = {
    energy: {
        title: '현재사용량',
    },
}

export enum InfoCode {
    CURRENT = 'current',
    PV = 'pv',
    ESS = 'ess',
    DR = 'dr',
}

export const DrStateCode: { [index: string]: string } = {
    idle: '평시',
    reliability: '신뢰성',
    voluntary: '자발성',
    both: '둘다',
}

export const EssStateCode: { [index: string]: string } = {
    idle: '평시',
    charged: '충전중',
    discharged: '방전중',
}
