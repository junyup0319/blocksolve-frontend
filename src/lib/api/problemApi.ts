import axios from 'axios';
import _ from 'lodash';

import host from './util';
import {Problem as ProblemForm, Solution as SolutionForm} from '../form';


export class ProblemApi {
  public async getProblems(): Promise<ProblemForm[]> {
    const res = await axios.get(`${host}/problems`);
    return res.data.data;
  }
  public async getProblem(pid: string): Promise<ProblemForm> {
    const res = await axios.get(`${host}/problems/${pid}`);
    return res.data.data[0];
  }
  public async getProblemsByCategory(category: string): Promise<ProblemForm[]> {
    const res = await axios.get(`${host}/problems?category=${category}`);
    return res.data.data;
  }
  public async getSavedSolution(uid: string, pid: string): Promise<SolutionForm> {
    const res = await axios.get(`${host}/savedsol?uid=${1}&pid=${Number(pid)}`);
    if (res.data.result === 200) {
      return res.data.data;
    } else {
      // return new Error('잘못된 접근입니다.');
      return new Promise((resolve, reject) => {
        reject(new Error());
      });
    }


  }
}

const problemApi = new ProblemApi();
export default problemApi;
