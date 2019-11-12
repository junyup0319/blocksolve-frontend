// file created at 2019-10-4
// Auto-generated files myPage.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {auth} from '@/lib/firebase';
import {ProblemApi} from '@/lib/api';
import {Problem, Solution} from '@/lib/form';

@Component({})
export default class MyPage extends Vue {
  // TODO
  // userStatus 에 open을 두어야 할 듯!
  // vue 파일에서 style 수정 및 데이터 적용!
  private userStatus: Array<{
    category: string,
    creator: string,
    pid: number,
    sid: number,
    source: string,
    subXML: string,
    title: string,
    uid: number,
    testresult: Array<{result: boolean, tid: number}>,
    open: false,
  }> = [];
  private problems: Problem[] = [];
  private solutions: Solution[] = [];

  get status() {
    return this.userStatus;
  }
  get solveCount() {
    return _.uniqBy(this.status, 'pid').length;
  }
  get problemCount() {
    return this.problems.length;
  }
  get testResult() {
    // TODO result 가 boolean으로 바뀌면 변경 필요!
    // @ts-ignore
    return _(this.status).map((s) => !_.some(s.testresult, {result: '실패'})).value();
  }
  get solutionDate() {
    return _.map(this.solutions, (s) => {
      const d = new Date();
      return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
    });
  }

  private itemClick(index: number) {
    Vue.set(this.userStatus[index], 'open', !this.userStatus[index].open);
  }
  private login() {
    auth.signIn();
  }
  private async mounted() {
    this.$loadingDefault.on();
    try {
      this.problems = await ProblemApi.getProblems();
      const res = await ProblemApi.getStatus('1');
      _.forEach(res, (s) => Object.assign(s, {open: false}));
      // @ts-ignore
      this.userStatus = res;

      // TODO 현재 디비 문제!
      // savedSolution 의 정보와 status의 정보가 다름
      // status는 내가 푼 문제
      // savedSolution은 내가 푼 문제에 대한 정보
      // => 똑같은걸 왜 두개나 만들었는지도 모르겠음.
      // 여튼 시발 두개가 다르다
      this.solutions = await Promise.all(_.map(res, (r) => ProblemApi.getSavedSolution('1', '1001')));
      console.log(this.solutions);
      this.$loadingDefault.off();
    } catch (e) {

      alert('server error');
      this.$router.go(-1);
    }
    setTimeout(this.$loadingDefault.off, 500);

  }
}
