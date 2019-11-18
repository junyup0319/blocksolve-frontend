import axios from 'axios';
import _ from 'lodash';

import host from './util';
import {Problem as ProblemForm, Solution as SolutionForm} from '../form';


export class ProblemApi {
  public async getProblems(): Promise<ProblemForm[]> {
    const ele = await fetch('/data/problem.json');
    const problems = JSON.parse(await ele.text()).data;
    return problems;

    // const res = await axios.get(`${host}/problems`);
    // // console.log(res);
    // return res.data.data;
  }
  public async getProblem(pid: string): Promise<ProblemForm> {
    const ele = await fetch('/data/problem.json');
    const problems = JSON.parse(await ele.text()).data;
    return _.filter(problems, (d) => d.pid === Number(pid))[0];

    // const res = await axios.get(`${host}/problems/${pid}`);
    // return res.data.data;
  }
  public async getProblemsByCategory(category: string): Promise<ProblemForm[]> {
    const res = await axios.get(`${host}/problems?category=${category}`);
    return res.data.data;
  }
  public async getSavedSolution(uid: string, pid: string): Promise<SolutionForm | null> {
    const ele = await fetch('/data/solution.json');
    const solutions = JSON.parse(await ele.text()).data;
    const data = _.filter(solutions, (sol) => sol.uid === Number(uid) && sol.pid === Number(pid))[0];
    if (_.isNil(data)) {
      return null;
    } else {
      return data;
    }
    // return new Promise(async (resolve, reject) => {
    //   const res = await axios.get(`${host}/save?uid=${1}&pid=${Number(pid)}`);
    //   if (res.data.result === 200) {
    //     return resolve(res.data.data);
    //   } else {
    //     reject(new Error());
    //   }
    // });
  }
  public async saveSolution(uid: string, pid: string, savedXML: string): Promise<{msg: string, result: boolean}> {
    // solution에 있으면 update 없으면 create
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
  public async submit(pid: string, uid: string, xml: string, source: string): Promise<{msg: string, result: boolean}> {
    // sumbit.json에 pid, uid 가 겹치는게
    // 없으면 crate, 있으면 update 한 뒤에
    // 결과를 임의로 만들어서 저장해야함

    // 그리고 제출하면 solution도 update 해줘야함
      // saveSolution() 으로 처리

    const res = await axios.post(`${host}/submit`, {
      pid: Number(pid),
      uid: 1,
      xml,
      source,
    });
    console.log(res.data);
    return res.data;
  }
  public async getStatus(uid: string):
    Promise<Array<{
        category: string,
        creator: string,
        pid: number,
        sid: number,
        source: string,
        subXML: string,
        testresult: Array<{result: boolean, tid: number}>,
        title: string,
        uid: number,
      }>> {
    // uid로 submit.json에 있는걸 다 가져온다
    const res = await axios.get(`${host}/status/${1}`);
    return res.data.data;
  }
}

const problemApi = new ProblemApi();
export default problemApi;
