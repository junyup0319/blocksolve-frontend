// file created at 2019-10-4
// Auto-generated files myPage.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {auth} from '@/lib/firebase';
import {ProblemApi} from '@/lib/api';

@Component({})
export default class MyPage extends Vue {
  private ui = {
    itemDetails: [false, false, false],
  };
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

  get itemDetail() {
    return this.ui.itemDetails;
  }

  get status() {
    return this.userStatus;
  }

  private itemClick(index: number) {
    Vue.set(this.userStatus[index], 'open', !this.userStatus[index].open);

    // const a = _.clone(this.ui.itemDetails);
    // a[index] = !a[index];
    // // this.ui.itemDetails[index] = a;
    // Vue.set(this.ui, 'itemDetails', a);
  }
  private login() {
    auth.signIn();
  }
  private async mounted() {
    this.$loadingDefault.on();
    try {
      const res = await ProblemApi.getStatus('1');
      _.forEach(res, (s) => Object.assign(s, {open: false}));
      console.warn(res);
      // @ts-ignore
      this.userStatus = res;
      this.$loadingDefault.off();
    } catch (e) {

      alert('server error');
      this.$router.go(-1);
    }
    setTimeout(this.$loadingDefault.off, 500);

  }
}
