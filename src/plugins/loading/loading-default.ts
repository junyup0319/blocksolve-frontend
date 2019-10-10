import Vue from 'vue';
import {Component} from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface LoadingDefault {
    on: () => void;
    off: () => void;
  }
}

@Component({})
export default class LoadingDefault extends Vue {
  private message: string = '';
  private show: boolean = false;
  public on() {
    this.show = true;
  }
  public off() {
    this.show = false;
  }
}
