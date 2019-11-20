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

  get submits() {
    return this.userSubmits;
  }
  get solveCount() {
    return _.unionBy(this.submits, 'submit.pid').length;
    // return _.uniqBy(this.status, 'pid').length;
  }
  get problemCount() {
    return api.problems.length;
    // return this.problems.length;
  }

  private itemClick(index: number) {
    Vue.set(this.userSubmits[index], 'open', !this.userSubmits[index].open);
  }
  private login() {
    auth.signIn();
  }
  private openResultDialog(submit: SubmitForm) {
    this.$resultDialog.on(submit);
  }
  private async mounted() {
    this.$loadingDefault.on();
    setTimeout(() => {
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
      this.$loadingDefault.off();
    }, 600);

    // try {
    //   this.problems = await ProblemApi.getProblems();
    //   const res = await ProblemApi.getStatus('1');
    //   _.forEach(res, (s) => Object.assign(s, {open: false}));
    //   // @ts-ignore
    //   this.userStatus = res;
    //   this.$loadingDefault.off();
    // } catch (e) {

    //   alert('server error');
    //   this.$router.go(-1);
    // }


  }
}
