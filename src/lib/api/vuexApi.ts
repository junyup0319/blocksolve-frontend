import $store from '../../../src/store';
import _ from 'lodash';

import {Problem as ProblemForm, Solution as SolutionForm, Submit as SubmitForm} from '../form';

class VuexApi {
  // TODO
  // 마이페이지에서 사용하는 status 만들기
  public async initVuex() {
    return new Promise(async (resolve, reject) => {
      try {
        const problemRaw = await fetch('/data/problem.json');
        const problems = JSON.parse(await problemRaw.text()).data;
        $store.commit('setProblems', problems);

        const solutionRaw = await fetch('/data/solution.json');
        const solutions = JSON.parse(await solutionRaw.text()).data;
        $store.commit('setSolutions', solutions);

        const sumbmitRaw = await fetch('/data/submit.json');
        const sumbmits = JSON.parse(await sumbmitRaw.text()).data;
        $store.commit('setSubmits', sumbmits);
        console.log('INIT VUEX!!', problems, solutions, sumbmits);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  public saveSolution(solution: SolutionForm) {
    const solutions = _.clone(this.solutions);
    const idx = _.findIndex(solutions, (s) => s.pid === solution.pid);
    if (idx === -1) {
      $store.commit('addSolution', solution);
    } else {
      solutions[idx] = solution;
      $store.commit('setSolutions', solutions);
    }
  }
  public saveSubmit(submit: {uid: string, pid: string, xml: string, source: string}, result: boolean): SubmitForm {
    // result에 따라 맞은 결과를 보여줄 수도, 틀린결과를 보여줄 수도 있다.
    // store에 저장하는 코드를 써야하나?
    // 써야하면 result에 따라서 testCase를 직접 넣어줘야한다!
    // $store.commit('addSubmit', submit);
    console.log('submit!!', _.filter(this.submits, (s) => s.pid === submit.pid && s.result === result)[0]);
    return _.filter(this.submits, (s) => s.pid === submit.pid && s.result === result)[0];
  }
  public async isProblemExist(pid: string): Promise<boolean> {
    const problemRaw = await fetch('/data/problem.json');
    const problems = JSON.parse(await problemRaw.text()).data;
    return _.some(problems, (p) => p.pid === pid);
  }

  get problems(): ProblemForm[] {
    return $store.getters.problems;
  }
  get solutions(): SolutionForm[] {
    return $store.getters.solutions;
  }
  get submits(): SubmitForm[] {
    return $store.getters.submits;
  }
}

export default new VuexApi();
