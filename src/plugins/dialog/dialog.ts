import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import _ from 'lodash';


declare module 'vue/types/vue' {
  interface Dialog {
    on: (title: string, message: string, positive: string, negative?: string) => Promise<any>;
    off: () => void;
  }
}

@Component({})
export default class Dialog extends Vue {
  private ui: {
    show: boolean,
    title: string,
    message: string,
    positive: string,
    negative: string,
    showNegative: boolean,
  } = {
    show: false,
    title: '',
    message: '',
    positive: '',
    negative: '',
    showNegative: true,
  };

  public on(title: string, message: string, positive: string, negative?: string) {
    this.ui.show = true;
    this.ui.title = title;
    this.ui.message = message;
    this.ui.positive = positive;
    if (!_.isNil(negative)) {
      this.ui.negative = negative;
    } else {
      this.ui.showNegative = false;
    }

    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  public off() {
    this.ui.show = false;
  }
  public resolve() {
    //
  }
  public reject() {
    //
  }
  public onNegative() {
    this.ui.show = false;
    this.reject();
  }
  public onPositive() {
    this.ui.show = false;
    this.resolve();
  }
}
