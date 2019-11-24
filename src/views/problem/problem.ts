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

import api from '@/lib/api/vuexApi';


@Component({})
export default class Ide extends Vue {
  public $refs!: {
    blocklyDiv: HTMLElement,
    blocklyArea: HTMLElement,
    consoleWindow: HTMLElement,
  };
  private ui = {
    showTabItem: true,
    showConsoleWindow: true,
  };
  private testXMLCode = '<xml><block type="text_print" id="sN?1S6lhQ+B5VJCpVZPR" x="50" y="90"><value name="TEXT"><block type="text" id="3)w9@)t+e|Gj@K=q17q]"><field name="TEXT">abc</field></block></value></block></xml>';
  private testXMLCodeNoID = '<xml><block type="text_print" x="30" y="90"><value name="TEXT"><block type="text"><field name="TEXT">abc</field></block></value></block></xml>';

  private workspace = new Blockly.Workspace();

  private toolboxXML = `
    <xml id="toolbox" style="display: none;">
      <category name="Logic" colour="210">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>
      </category>
      <category name="Loops" colour="120">
        <block type="controls_repeat_ext">
          <value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">
          <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        </block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
      </category>
      <category name="Math" colour="230">
        <block type="math_number"><field name="NUM">123</field></block>
        <block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>
        <block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block>
        <block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block>
        <block type="math_constant"></block>
        <block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
        <block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block>
        <block type="math_on_list"></block>
        <block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>
        <block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>
        <block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>
        <block type="math_random_float"></block>
        <block type="math_atan2"><value name="X"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>
      </category>
      <category name="Text" colour="160">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append"><value name="TEXT"><shadow type="text"></shadow></value></block>
        <block type="text_length"><value name="VALUE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>
        <block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value></block>
        <block type="text_indexOf"><value name="VALUE">
        <block type="variables_get"><field name="VAR">{textVariable}</field></block>
        </value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>
        <block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block>
        <block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_changeCase"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_trim"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_print"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_prompt_ext"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>
      </category>
      <category name="Lists" colour="200">
        <block type="lists_create_with"><mutation items="0"></mutation></block>
        <block type="lists_create_with"></block>
        <block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block>
        <block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block>
        <block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block>
        <block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block>
        <block type="lists_split"><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block><block type="lists_sort"></block>
      </category>
      <sep></sep>
      <category name="Variables" colour="330" custom="VARIABLE"></category>
      <category name="Functions" colour="290" custom="PROCEDURE"></category>
    </xml>`;

  private javaScriptCode: string = '';
  private pythonCode: string = '';

  private interpreter!: Interpreter;
  private consoleResults: string[] = [];


  // private problem: Problem = {
  //   pid: '',
  //   title: '',
  //   category: '',
  //   creator: '',
  //   numSub: 0,
  //   correctRate: 0,
  //   content: '',
  //   inputDetail: '',
  //   outputDetail: '',
  //   initXML: '',
  //   example: '',
  //   createdAt: 0,
  // };


  @debounce(1000, { leading: false })
  private async onCodeChangeServerCall() {
    api.saveSolution({
      uid: '1',
      pid: this.$route.params.pid,
      savedAt: new Date().getTime(),
      savedXML: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace)),
    });
    console.log('success auto save');
    // try {
    //   await ProblemApi.saveSolution('1', this.$route.params.pid,
    //     Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace)));
    //   console.log('success auto save!');
    // } catch (e) {
    //   console.error('fail auto save!', e);
    // }
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
  private toggleConsoleClick() {
    this.ui.showConsoleWindow = !this.ui.showConsoleWindow;
    setTimeout(() => {
      this.onResize();
      // Blockly.svgResize(this.workspace);
    }, 200);
  }
  private deleteConsole() {
    this.consoleResults = [];
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
    Blockly.Blocks.string_length = {
      init() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      },
    };
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
    this.workspace.toolbox_.HtmlDiv.style.background = 'rgba(65, 165, 211, 0.8)';
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

  private initInterpreterApi(interpreter: Interpreter, scope: any) {
    // Add an API function for highlighting blocks.
    // const wrapper = (id: string) => {
    //   return this.workspace.highlightBlock(id);
    // };
    // interpreter.setProperty(scope, 'highlightBlock',
    //     interpreter.createNativeFunction(wrapper));

    // Add an API function for the alert() block.f
    const consoleWrapper = (text: string) => {
      setTimeout(() => {
        this.$refs.consoleWindow.scrollTop = this.$refs.consoleWindow.scrollHeight;
      }, 50);
      return this.consoleResults.push(arguments.length ? text : '');
      // return alert(arguments.length ? text : '');
    };
    interpreter.setProperty(scope, 'alert',
        interpreter.createNativeFunction(consoleWrapper));

    // Add an API function for the prompt() block.
    const wrapper = (text: string) => {
      return prompt(text);
    };
    interpreter.setProperty(scope, 'prompt',
        interpreter.createNativeFunction(wrapper));
  }
  private run() {
    this.interpreter = new Interpreter(this.javaScriptCode, this.initInterpreterApi);
    this.interpreter.run();
  }
  private async submit(testResult: boolean) {
    console.log(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace)));
    this.$loadingDefault.on('0.1');
    // TODO
    // saveSubmit => true, false 분기
    const res = api.saveSubmit({
      uid: '1',
      pid: this.$route.params.pid,
      xml: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace)),
      source: this.pythonCode,
    }, testResult);
    setTimeout(() => {
      this.$loadingDefault.off();
      this.$resultDialog.on(res);

    }, 800);


    // try {
    //   const res = await ProblemApi.submit(this.problem.pid, '1',
    //     Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace)),
    //     this.pythonCode);

    //   console.log(res);
    //   // TODO
    //   // results를 실제 데이터로 바꾸기
    //   //  => res에서 테스트 케이스 별로 데이터가 넘어와야함
    //   //  => 데이터에 맞게 dialog 바꾸기
    //   // test code
    //   const results: Array<{text: string, correct: boolean}> = [];
    //   if (res.result) {
    //     results.push({text: 'true!!', correct: true});
    //   } else {
    //     results.push({text: 'false!!', correct: false});
    //   }
    //   for (let i = 0; i < 20; i++) {
    //     results.push({
    //       text: 'test' + i, correct: true,
    //     });
    //   }
    //   this.$resultDialog.on(results);

    // } catch (e) {
    //   console.error(e);
    // }

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

  get problem() {
    return _.filter(api.problems, (p) => p.pid === this.$route.params.pid)[0];
  }

  get solution() {
    return _.filter(api.solutions, (s) => s.pid === this.problem.pid)[0];
  }

  private async mounted() {
    this.initBlockly();
    this.workspace.addChangeListener(this.updateBlockCode);
    this.$loadingDefault.on();
    if (!await api.isProblemExist(this.$route.params.pid)) {
      alert('잘못된 접근입니다.');
      this.$router.go(-1);
    }
    setTimeout(async () => {
      this.$loadingDefault.off();
      if (_.isNil(this.solution)) {
        console.log('저장된 solution 없음');
        this.initCode();
      } else {
        try {
          this.$loadingDefault.off();
          await this.$dialog.on('title', '저장된 블록이 있습니다.\n저장된 블록을 가져오시겠습니까?', '가져오기', '취소');
          console.log('저장된 solution', this.solution);
          const dom = Blockly.Xml.textToDom(this.solution.savedXML);
          Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, this.workspace);
        } catch (e) {
          this.initCode();
        }
      }
    }, 600);



    // try {
    //   this.problem = await ProblemApi.getProblem(this.$route.params.pid);
    //   console.log('problem: ', this.problem);
    // } catch (e) {
    //   alert('잘못된 접근입니다.');
    //   return;
    //   // this.$router.go(-1);
    // }
    // this.initBlockly();

    // this.workspace.addChangeListener(this.updateBlockCode);

    // try {
    //   const solution = await ProblemApi.getSavedSolution('1', this.problem.pid);
    //   // 저장된 solution이 있는 경우
    //   if (_.isNil(solution)) {
    //     console.log('저장된 solution 없음');
    //   } else {
    //     try {
    //       this.$loadingDefault.off();
    //       await this.$dialog.on('title', '저장된 블록이 있습니다.\n저장된 블록을 가져오시겠습니까?', '가져오기', '취소');
    //       console.log('solution', solution);
    //       const dom = Blockly.Xml.textToDom(solution.savedXML);
    //       Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, this.workspace);
    //     } catch (e) {
    //       this.initCode();
    //     }
    //   }
    // } catch (e) {
    //   console.error('server error');
    //   alert('server error');
    //   this.$router.go(-1);
    // }



  }
}
