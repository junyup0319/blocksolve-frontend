export interface Problem {
  pid: string;
  title: string;
  category: string;
  creator: string;
  numSub: number;
  correctRate: number;
  content: string;
  inputDetail: string;
  outputDetail: string;
  initXML: string;
}

export interface Solution {
  uid: string;
  pid: string;
  savedAt: number;
  savedXML: string;
  status: string;
}
