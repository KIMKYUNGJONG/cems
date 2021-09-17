
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
    project: string;
    aplicationId: string;
    coords: string[];
    regDate: string;
    userId: string;
    sms: string[];
    note: string;
  }

export interface Site {
    [index: string]: string | number | boolean
    id: string
    name: string
    latitude: number
    longitude: number
}

export const clusterCard = {
  energy: {
    title: '현재사용량',
  },
};

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
};

export const EssStateCode: { [index: string]: string } = {
  idle: '평시',
  charged: '충전중',
  discharged: '방전중',
};
