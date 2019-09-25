import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  private name: string = 'app';
  private ui = {
    showNav: false,
  };
  private tabItems: Array<{name: string, to: string}> = [
    {name: '문제 리스트', to: '/problemlist'},
    {name: '마이페이지', to: '/myPage'},
  ];

  @Watch('$route')
  private onChangeRoute() {
    this.ui.showNav = false;
  }

}
