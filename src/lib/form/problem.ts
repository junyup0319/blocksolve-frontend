export interface Problem {
  pid: string;
  title: string;
  content: string;
  category: string;
  creator: string;
  createdAt: number;
  numSub: number;
  correctRate: number;
  inputDetail: string;
  outputDetail: string;
  example: string;
  initXML: string;
}

export interface Solution {
  uid: string;
  pid: string;
  savedAt: number;
  savedXML: string;
}
