// file created at 2019-10-4
// Auto-generated files myPage.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {auth} from '@/lib/firebase';
import {ProblemApi} from '@/lib/api';
import {Problem as ProblemForm, Solution, Submit as SubmitForm} from '@/lib/form';
import api from '@/lib/api/vuexApi';

@Component({})
export default class MyPage extends Vue {
  private userSubmits: Array<{submit: SubmitForm, problem: ProblemForm, open: boolean}> = [];
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
  private problems: ProblemForm[] = [];

  get submits() {
    return this.userSubmits;
  }
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

  private itemClick(index: number) {
    Vue.set(this.userSubmits[index], 'open', !this.userSubmits[index].open);
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
      this.$loadingDefault.off();
    } catch (e) {

      alert('server error');
      this.$router.go(-1);
    }
    setTimeout(() => {
      this.$loadingDefault.off();
      const submits = api.submits;
      const problems = api.problems;
      this.userSubmits = _.map(submits, (s) => {
        return {
          submit: s,
          problem: _.filter(problems, (p) => p.pid === s.pid)[0],
          open: false,
        };
      });
      console.log(this.userSubmits);
    }, 600);

  }
}
