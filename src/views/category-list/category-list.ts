// file created at 2019-10-3
// Auto-generated files category-list.ts

import { Vue, Component } from 'vue-property-decorator';
import { Problem } from '@/lib/form';
import _ from 'lodash';

@Component({})
export default class CategoryList extends Vue {
  private categoryName: string = '';
  private problems: Problem[] = [];
  private clickItem(id: string) {
    this.$router.push({
      path: `${id}`,
    });
  }
  private mounted() {
    if (_.isNil(this.$route.query.category)) {
      this.$router.go(-1);
      return;
    }
    // @ts-ignore
    this.categoryName = this.$route.query.category;

  }
}
