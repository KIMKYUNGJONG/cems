interface IProject {
  projectName: string;
  scene: string;
  aplicationId: number | string;
  sms?: string[];
  note?: string;
}

interface IUser {
  id: string;
  pw: string;
  company: string;
  manager: string;
  contact: number | string;
  email?: string;
  projectList: string[];
  note?: string;
}

interface EditableRowProps {
  index: number;
}

export type { EditableRowProps, IUser, IProject };