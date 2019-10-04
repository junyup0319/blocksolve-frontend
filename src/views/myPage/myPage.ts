// file created at 2019-10-4
// Auto-generated files myPage.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {auth} from '@/lib/firebase';

@Component({})
export default class MyPage extends Vue {
  private ui = {
    itemDetails: [false, false, false],
  };

  get itemDetail() {
    return this.ui.itemDetails;
  }

  private itemClick(index: number) {
    console.log(this.$store.getters.user.photoURL);
    const a = _.clone(this.ui.itemDetails);
    a[index] = !a[index];
    // this.ui.itemDetails[index] = a;
    Vue.set(this.ui, 'itemDetails', a);
  }
  private login() {
    auth.signIn();
  }
  private mounted() {
    // if (_.isNil(this.$store.getters.user)) {
    //   auth.signIn();
    // }
  }
}
