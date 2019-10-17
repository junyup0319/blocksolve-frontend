import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {auth} from '@/lib/firebase';
import Loading from '@/plugins/loading';
import Dialog from '@/plugins/dialog';

Vue.use(Loading);
Vue.use(Dialog);

@Component({})
export default class App extends Vue {
  private tabItems = ['Foo', 'Bar', 'Fizz', 'Buzz'];
  private categoryItems = ['카테고리1', '카테고리2'];
  private active = false;
  private name: string = 'app';
  private ui = {
    showNav: false,
  };
  private login() {
    auth.signIn();

  }
  private async logout() {
    try {
      await auth.signOut();
      // TODO
      this.$store.commit('signOut');
    } catch (e) {
      console.log(e);
    }

  }

  @Watch('$route')
  private onChangeRoute() {
    //
  }
  private mounted() {
    auth.setOnAuthChanged((u) => {
      this.$store.commit('signIn', u);
      console.warn(this.$store.getters.user);
    });


  }

}
