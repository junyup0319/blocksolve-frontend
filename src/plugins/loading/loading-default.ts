import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import _ from 'lodash';

declare module 'vue/types/vue' {
  interface LoadingDefault {
    on: (opacity?: string) => void;
    off: () => void;
  }
}

@Component({})
export default class LoadingDefault extends Vue {
  public $refs!: {
    wrapper: HTMLElement,
  };
  private ui = {
    background: '#eee',
  };
  private message: string = '';
  private show: boolean = false;
  public on(opacity?: string) {
    this.show = true;
    _.isNil(opacity) ? this.ui.background = '#eee' : this.ui.background = `rgba(0,0,0,${opacity})` ;
  }
  public off() {
    this.show = false;
  }
}
