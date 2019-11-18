import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import _ from 'lodash';
import {Submit as SubmitForm} from '@/lib/form';
declare module 'vue/types/vue' {
  interface ResultDialog {
    on: (result: SubmitForm) => {};
    off: () => {};
  }
}


@Component({})
export default class ResultDialog extends Vue {
  private ui = {
    show: false,
    isCorrect: true,
  };
  private testCaseResult: Array<{input: string, expectOutput: string, output: string, result: boolean}> = [];
  public on(res: SubmitForm) {
    this.ui.show = true;
    this.ui.isCorrect = res.result;
    this.testCaseResult = res.testCase;
  }
  public off() {
    this.ui.show = false;
  }

}
