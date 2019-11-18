import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {auth} from '@/lib/firebase';
import Loading from '@/plugins/loading';
import Dialog from '@/plugins/dialog';
import ResultDialog from '@/plugins/resultDialog';

import {VuexApi as api} from '@/lib/api';

Vue.use(Loading);
Vue.use(Dialog);
Vue.use(ResultDialog);

@Component({})
export default class App extends Vue {
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
  private async mounted() {
    auth.setOnAuthChanged((u) => {
      this.$store.commit('signIn', u);
      console.warn(this.$store.getters.user);
    });


    try {
      await api.initVuex();
    } catch (e) {
      alert('server error!');
      this.$router.go(-1);
    }

  }

}
