export interface Problem {
  pid: string;
  title: string;
  content: string;
  category: string;
  creator: string;
  createdAt: number;
  submitNumber: number;
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

export interface Submit {
  uid: string;
  pid: string;
  xml: string;
  source: string;
  submitAt: number;
  result: boolean;
  testCase: Array<{input: string, expectOutput: string, output: string, result: boolean}>;
}
