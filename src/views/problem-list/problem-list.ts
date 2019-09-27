// file created at 2019-9-24
// Auto-generated files problem-list.ts

import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ProblemList extends Vue {
  private clickItem(id: string) {
    this.$router.push({
      path: `/ide/${id}`,
    });
  }
  private mounted() {
    //
  }
}
