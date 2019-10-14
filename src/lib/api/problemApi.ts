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
    return res.data.data;
  }
  public async getProblemsByCategory(category: string): Promise<ProblemForm[]> {
    const res = await axios.get(`${host}/problems?category=${category}`);
    return res.data.data;
  }
  public async getSavedSolution(uid: string, pid: string): Promise<SolutionForm> {
    const res = await axios.get(`${host}/save?uid=${1}&pid=${Number(pid)}`);
    if (res.data.result === 200) {
      return res.data.data;
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error());
      });
    }
  }
  public async saveSolution(uid: string, pid: string, savedXML: string): Promise<{msg: string, result: boolean}> {
    const res = await axios.post(`${host}/save`, {
      pid: Number(pid),
      uid: 1,
      savedAt: new Date().getTime(),
      savedXML,
    });
    if (res.data.result) {
      return res.data;
    } else {
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }
}

const problemApi = new ProblemApi();
export default problemApi;
