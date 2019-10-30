import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import _ from 'lodash';
declare module 'vue/types/vue' {
  interface ResultDialog {
    on: (results: Array<{text: string, correct: boolean}>) => {};
    off: () => {};
  }
}


@Component({})
export default class ResultDialog extends Vue {
  private ui = {
    show: false,
    isCorrect: true,
  };
  private results: Array<{text: string, correct: boolean}> = [];
  public on(results: Array<{text: string, correct: boolean}>) {
    this.ui.show = true;
    // TODO
    // data 받아와야됨 (타입 변경 필요)
    // 맞았는지 틀렸는지 확인 후 ui.isCorrect 변경
    this.ui.isCorrect = !_.some(results, ['correct', false]);
    this.results = results;
  }
  public off() {
    this.ui.show = false;
  }

}
