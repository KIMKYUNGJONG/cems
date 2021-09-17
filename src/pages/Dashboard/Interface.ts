interface Data {
  project: string;
  aplicationId: string;
  coords: string[];
  regDate: string;
  userId: string;
  sms: string[];
  note: string;
}
export type defaultType = { 
  htValue: any;
  handleGraphView:Function;
  scene: string;
  data: Data;
  pushdata: [{ tag:string, data:object[] }]
}

export type dashboardList = { 
  htValue?: {
    umi: any;
    mi: Function;
    isHooked: boolean
  };
  scene?: string;
  data: Data
}