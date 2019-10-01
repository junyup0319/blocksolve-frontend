// file created at 2019-9-24
// Auto-generated files ide.ts

import { Vue, Component } from 'vue-property-decorator';
import { Problem } from '@/lib/form';
// @ts-ignore
import Blockly from 'node-blockly/browser';
// @ts-ignore
import Korean from 'node-blockly/lib/i18n/ko.js';

import 'node-blockly/lib/blockly_compressed_browser.js';
import 'node-blockly/lib/javascript_compressed';
import 'node-blockly/lib/python_compressed';

@Component({})
export default class Ide extends Vue {
  public $refs!: {
    blocklyDiv: HTMLElement,
    blocklyArea: HTMLElement,
  };
  private ui = {
    showTabItem: true,
  };

  private workspace = new Blockly.Workspace();
  private toolboxXML =
    `<xml id="toolbox" style="display: none;">
      <category name="Logic" colour="210">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_boolean"></block>
      </category>
      <category name="Loops" colour="120">
        <block type="controls_for"></block>
        <block type="controls_whileUntil"></block>
        <block type="controls_repeat_ext"></block>
      </category>
      <category name="Math" colour="230">
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
      </category>
      <category name="Text" colour="160">
        <block type="text"></block>
        <block type="text_print"></block>
      </category>
      <category name="Variables" colour="330" custom="VARIABLE"></category>
      <category name="Functions" colour="290" custom="PROCEDURE"></category>
    </xml>`;
  private code: string = `console.log('code');`;
  private problem: Problem = {
    pid: '',
    title: '',
    category: '',
    creator: '',
    submitCount: 0,
    correctRate: 0 + '%',
    submitStatus: 'correct',
    contents: '',
    inputDetails: '',
    outputDetails: '',
    exInput: [
      {
          inputId: '',
          value: [],
      },
      {
          inputId: '',
          value : [],
      },
    ],
    exOutput: [
      {
        outputId: '',
        value: [],
      },
      {
        outputId: '',
        value : [],
      },
    ],
  };

  private onResize() {
    this.$refs.blocklyDiv.style.left = 0 + 'px';
    this.$refs.blocklyDiv.style.top = 0 + 'px';
    this.$refs.blocklyDiv.style.width = this.$refs.blocklyArea.offsetWidth + 'px';
    this.$refs.blocklyDiv.style.height = this.$refs.blocklyArea.offsetHeight + 'px';
    // this.$refs.blocklyDiv.style.zIndex = '1';
    Blockly.svgResize(this.workspace);
  }

  private toggleTabClick() {
    this.ui.showTabItem = !this.ui.showTabItem;
    setTimeout(() => {
      Blockly.svgResize(this.workspace);
    }, 200);
  }

  private initBlockly() {
    Blockly.setLocale(Korean);
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: this.toolboxXML,
      zoom: {
        controls: true,
        // wheel: true,
        startScale: 1.0,
        maxScale: 2,
        minScale: 0.7,
        scaleSpeed: 1.2,
      },
      grid: {
        spacing: 20,
        length: 2,
        colour: '#ddd',
        snap: true,
      },
      trashcan: true,
    });
    this.workspace.toolbox_.HtmlDiv.style.background = 'rgba(156, 213, 159, 1)';
    this.workspace.toolbox_.HtmlDiv.style.color = '#fff';

    window.addEventListener('resize', this.onResize, false);
    this.$nextTick(() => {
      this.onResize();
      Blockly.svgResize(this.workspace);
    });
  }

  private mounted() {
    this.initBlockly();
    // test code
    this.problem = {
      pid: this.$route.params.pid,
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
    };
  }
}
