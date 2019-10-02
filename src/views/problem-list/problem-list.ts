// file created at 2019-9-24
// Auto-generated files problem-list.ts

import { Vue, Component } from 'vue-property-decorator';
import { Problem } from '@/lib/form';
@Component({})
export default class ProblemList extends Vue {
  private problems: Problem[] = [];
  private clickItem(id: string) {
    this.$router.push({
      path: `problems/${id}`,
    });
  }
  private mounted() {
    // test code
    for (let i = 0; i < 10; i++) {
      this.problems.push(
        {
          pid: i + '',
          title: 'A+B',
          category: 'basic',
          creator: 'Joylish',
          submitCount: Math.floor(Math.random() * 100),
          correctRate: (Math.random() * 100).toFixed(2) + '%',
          submitStatus: 'correct',
          contents: '두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.',
          inputDetails: '첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)',
          outputDetails: '첫째 줄에 A-B를 출력한다.',
          exInput: [
            {
                inputId: '1',
                value: [2, 3],
            },
            {
                inputId: '2',
                value : [4, 3],
            },
          ],
          exOutput: [
            {
              outputId: '1',
              value: [2, 3],
            },
            {
              outputId: '2',
              value : [4, 3],
            },
          ],
        },
      );
    }
  }
}
