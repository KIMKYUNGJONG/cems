interface Data {
  project: string;
  aplicationId: string;
  coords: string[];
  regDate: string;
  userId: string;
  sms: string[];
  note: string;
}

export interface FormData {
  section: string;
  sensorType: string;
  sensorName: string;
  decade: string;
  selectDecade: object | object[];
}
export type reportList = { 
  data: Data
}