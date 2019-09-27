import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  public tabItems = ['Foo', 'Bar', 'Fizz', 'Buzz'];
  private name: string = 'app';
  private ui = {
    showNav: false,
  };

  @Watch('$route')
  private onChangeRoute() {
    this.ui.showNav = false;
  }

}
