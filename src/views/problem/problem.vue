// file created at 2019-9-24
// Auto-generated files ide.vue

<template>
  <div>
    <div class="ide-area">
      <div class="tab-area" :showTabItem="ui.showTabItem">
        <v-btn class="tab-button" icon width="16px"
          style="position: absolute; right: 0px; top: 36%; height: 100px;
            background: #ddd; border-radius: 4px 0 0 4px; z-index: 100;"
          @click="toggleTabClick"><v-icon :showTabItem="ui.showTabItem" style="width: 16px; height: 16px;">keyboard_arrow_right</v-icon>
        </v-btn>
        <v-tabs vertical color="rgb(65, 165, 211)">
          <v-tab style="border-bottom: solid 1px rgb(65, 165, 211, 0.7);"><v-icon>description</v-icon></v-tab>
          <v-tab style="border-bottom: solid 1px rgb(65, 165, 211, 0.7);"><v-icon>code</v-icon></v-tab>
          <v-tab-item class="tab-item" v-if="problem">
            <div class="tab-item-title">문제</div>
            <v-card flat class="tab-item-content">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.content"></v-card-text>
            </v-card>
            <v-divider style="margin: 40px 0;"></v-divider>
            <div class="tab-item-title sub">입력 예시</div>
            <v-card flat class="tab-item-content">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.inputDetail"></v-card-text>
            </v-card>
            <div class="tab-item-title sub">출력 예시</div>
            <v-card flat class="tab-item-content">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.outputDetail"></v-card-text>
            </v-card>
            <div class="tab-item-title sub">예시</div>
            <v-card v-for="(example, i) in problem.example" :key="'example' + i"
              flat class="tab-item-content">
              <v-card-text style="color: white; font-size: 16px;">예시{{i + 1}}<br/>&nbsp;&nbsp;input: {{example.input}} &nbsp;&nbsp; / &nbsp;&nbsp;  output: {{example.output}}</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item class="tab-item">
            <div class="tab-item-title">code</div>
            <v-card flat class="tab-item-content">
              <v-card-text style="color: white; font-size: 16px; width: 120px; white-space: pre;">{{javaScriptCode}}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column;">
        <div class="blockly-area" ref="blocklyArea">
          <div id="blocklyDiv" ref="blocklyDiv"></div>
          <v-btn fab dark color="rgb(65, 165, 211)"
            style="position: absolute; right: 116px; bottom: 136px; z-index: 999;"
            @click="run">
            <v-icon large>play_arrow</v-icon>
          </v-btn>
          <v-btn dark color="rgb(65, 165, 211)"
            style="position: absolute; right: 100px; bottom: 88px; z-index: 999; width: 92px;"
            @click="submit(true)">
            제출하기
          </v-btn>
          <div
            style="position: absolute; right: 100px; bottom: 88px; z-index: 999; width: 46px; height: 36px;"
            @click="submit(false)">
          </div>
          <v-btn dark color="rgb(65, 165, 211)"
            style="position: absolute; right: 100px; bottom: 40px; z-index: 999; width: 92px;"
            @click="initCode">
            코드초기화
          </v-btn>
        </div>
        <div class="console-area" :showConsoleWindow="ui.showConsoleWindow">
          <div class="console-nav">
            <div class="console-title" @click="toggleConsoleClick">실행 결과</div>
            
            <v-spacer></v-spacer>
            <v-btn class="console-button" icon height="16px" style="width: 100px;
              background: #ddd; border-radius: 0 0 4px 4px; z-index: 100;"
              @click="toggleConsoleClick">
              <v-icon :showConsoleWindow="ui.showConsoleWindow" style="width: 16px; height: 16px;">keyboard_arrow_up</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn small elevation="0" width="80"
              style="margin: 2px 10px 0 0; color: #444;" color="#eee"
              @click="deleteConsole">삭제</v-btn>
          </div>
          
          <div class="console-content" ref="consoleWindow">
            <div v-for="(res, i) in consoleResults" :key="'alert' + i">{{res}}</div>
          </div>
          
        </div>
      </div>



    </div>
  </div>
</template>
<script src='./problem.ts'>

</script>
<style lang='scss' scoped>
@import "../../style/_common.scss";
@import "./problem.scss";
</style>
