// file created at 2019-9-24
// Auto-generated files problem-list.ts

import { Vue, Component } from 'vue-property-decorator';
import { Problem } from '@/lib/form';
import { ProblemApi } from '@/lib/api';
import api from '@/lib/api/vuexApi';

@Component({})
export default class ProblemList extends Vue {
  private api = api;
  private problems: Problem[] = [];
  private clickItem(id: string) {
    this.$router.push({
      path: `/problems/${id}`,
    });
  }
  private async mounted() {
    this.$loadingDefault.on();
    setTimeout(() => {
      this.$loadingDefault.off();
    }, 600);
    // try {
    //   this.problems = await ProblemApi.getProblems();
    //   console.log('problems', this.problems);
    // } catch (e) {
    //   alert('server error');
    //   this.$router.go(-1);
    // }


  }
}
