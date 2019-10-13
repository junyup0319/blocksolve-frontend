// file created at 2019-9-24
// Auto-generated files ide.ts

import { Vue, Component, Watch } from 'vue-property-decorator';
import { Problem } from '@/lib/form';
// @ts-ignore
import Blockly from 'node-blockly/browser';
// @ts-ignore
import Korean from 'node-blockly/lib/i18n/ko.js';

import 'node-blockly/lib/blockly_compressed_browser.js';
import 'node-blockly/lib/javascript_compressed';
import 'node-blockly/lib/python_compressed';

// @ts-ignore
import Interpreter from 'js-interpreter';

import ProblemApi from '@/lib/api/problemApi';

import _ from 'lodash';
import { debounce } from 'typescript-debounce-decorator';


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

  private javaScriptCode: string = '';
  private pythonCode: string = '';

  private interpreter!: Interpreter;


  private problem: Problem = {
    pid: '',
    title: '',
    category: '',
    creator: '',
    numSub: 0,
    correctRate: 0,
    content: '',
    inputDetail: '',
    outputDetail: '',
    initXML: '',
    example: '',
    createdAt: 0,
  };


  @debounce(1000, { leading: false })
  private onCodeChangeServerCall() {
    console.log('code change => server call');
  }

  @Watch('javaScriptCode')
  private onCodeChange() {
    this.onCodeChangeServerCall();
  }

  private toggleTabClick() {
    this.ui.showTabItem = !this.ui.showTabItem;
    setTimeout(() => {
      Blockly.svgResize(this.workspace);
    }, 200);
  }

  private onResize() {
    this.$refs.blocklyDiv.style.left = 0 + 'px';
    this.$refs.blocklyDiv.style.top = 0 + 'px';
    this.$refs.blocklyDiv.style.width = this.$refs.blocklyArea.offsetWidth + 'px';
    this.$refs.blocklyDiv.style.height = this.$refs.blocklyArea.offsetHeight + 'px';
    // this.$refs.blocklyDiv.style.zIndex = '1';
    Blockly.svgResize(this.workspace);
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

  private updateBlockCode() {
    this.javaScriptCode = Blockly.JavaScript.workspaceToCode(this.workspace);
    this.pythonCode = Blockly.Python.workspaceToCode(this.workspace);
  }

  private initApi(interpreter: any, scope: any) {
    // Add an API function for highlighting blocks.
    // const wrapper = (id: string) => {
    //   return this.workspace.highlightBlock(id);
    // };
    // interpreter.setProperty(scope, 'highlightBlock',
    //     interpreter.createNativeFunction(wrapper));

    // Add an API function for the alert() block.
    let wrapper2 = (text: string) => {
      return alert(arguments.length ? text : '');
    };
    interpreter.setProperty(scope, 'alert',
        interpreter.createNativeFunction(wrapper2));

    // Add an API function for the prompt() block.
    wrapper2 = (text) => {
      return prompt(text);
    };
    interpreter.setProperty(scope, 'prompt',
        interpreter.createNativeFunction(wrapper2));
  }
  private run() {
    this.interpreter = new Interpreter(this.javaScriptCode, this.initApi);
    this.interpreter.run();
  }
  private submit() {
    // TODO
    console.log('submit click => server call');
  }

  private initCode() {
    // TODO
    // const xml = Blockly.Xml.workspaceToDom(this.workspace);

    let dom;
    // TODO 서버에서 넘어오는거 바뀌면 그냥 initXML 바로 넣어도됨!
    if (this.problem.initXML === null) {
      dom = Blockly.Xml.textToDom('<xml></xml>');
    } else {
      dom = Blockly.Xml.textToDom(this.problem.initXML);
    }

    Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, this.workspace);
    // 그냥 블록 추가 코드
    // Blockly.Xml.domToWorkspace(dom, this.workspace);

  }

  private async mounted() {
    this.$loadingDefault.on();
    try {
      this.problem = await ProblemApi.getProblem(this.$route.params.pid);
      console.log('problem: ', this.problem);
    } catch (e) {
      alert('잘못된 접근입니다.');
      // this.$router.go(-1);
    }


    this.initBlockly();

    this.workspace.addChangeListener(this.updateBlockCode);


    try {
      const solution = await ProblemApi.getSavedSolution('1', this.problem.pid);
      try {
        await this.$dialog.on('title', '저장된 블록이 있습니다.\n저장된 블록을 가져오시겠습니까?', '가져오기', '취소');
        // 가져오기 선택
        const dom = Blockly.Xml.textToDom(solution.savedXML);
        console.log('savedXML:', dom);
        Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, this.workspace);
      } catch (e) {
        // 안가져오기
      }
    } catch (e) {
      // 문제가 없는 경우
    }

    this.$loadingDefault.off();


  }
}
