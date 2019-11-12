// file created at 2019-9-24
// Auto-generated files main.ts

import { Vue, Component } from 'vue-property-decorator';
import {auth} from '@/lib/firebase';

@Component({})
export default class Main extends Vue {
  private clickStart() {
    this.$store.state.user === null ? auth.signIn() : this.$router.push({
      name: 'problem-list',
      path: '/problems',
    });

  }
  private mounted() {
    //
  }
}
