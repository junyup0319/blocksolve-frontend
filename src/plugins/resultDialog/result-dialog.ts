import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VUEX from 'vuex';
import Store from '@/store';
declare module 'vue/types/vue' {
  interface ResultDialog {
    on: () => {};
    off: () => {};
  }
}


@Component({})
export default class ResultDialog extends Vue {
  private ui = {
    show: true,
    isCorrect: true,
  };
  public on() {
    // TODO
    // data 받아와야됨
  }
  public off() {
    this.ui.show = false;
  }

}
