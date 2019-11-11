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
  }> = [];

  get itemDetail() {
    return this.ui.itemDetails;
  }

  get userStats() {
    return this.userStatus;
  }

  private itemClick(index: number) {
    const a = _.clone(this.ui.itemDetails);
    a[index] = !a[index];
    // this.ui.itemDetails[index] = a;
    Vue.set(this.ui, 'itemDetails', a);
  }
  private login() {
    auth.signIn();
  }
  private async mounted() {
    this.$loadingDefault.on();
    try {
    this.userStatus = await ProblemApi.getStatus('1');
    console.warn(this.userStatus);
    this.$loadingDefault.off();
    } catch (e) {

      alert('server error');
      this.$router.go(-1);
    }
    setTimeout(this.$loadingDefault.off, 500);

  }
}
