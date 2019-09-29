export interface Problem {
  pid: string;
  title: string;
  category: string;
  creator: string;
  submitCount: number;
  correctRate: string;
  submitStatus: string;
  contents: string;
  inputDetails: string;
  outputDetails: string;
  exInput: Array<{inputId: string, value: number[]}>;
  exOutput: Array<{outputId: string, value: number[]}>;
}
