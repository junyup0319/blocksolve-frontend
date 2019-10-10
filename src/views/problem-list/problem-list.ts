// file created at 2019-9-24
// Auto-generated files problem-list.ts

import { Vue, Component } from 'vue-property-decorator';
import { Problem } from '@/lib/form';
import { ProblemApi } from '@/lib/api';

@Component({})
export default class ProblemList extends Vue {
  private problems: Problem[] = [];
  private clickItem(id: string) {
    this.$router.push({
      path: `problems/${id}`,
    });
  }
  private async mounted() {
    this.$loadingDefault.on();
    try {
      this.problems = await ProblemApi.getProblems();
      console.log(this.problems);
    } catch (e) {
      alert('server error');
      this.$router.go(-1);
    }
    this.$loadingDefault.off();

  }
}
