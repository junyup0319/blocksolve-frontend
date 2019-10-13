// file created at 2019-9-24
// Auto-generated files ide.vue

<template>
  <div>
    <div class="ide-area">
      <div class="tab-area" :showTabItem="ui.showTabItem">
        <v-btn class="tab-button" icon width="16px"
          style="position: absolute; right: 0px; top: 36%; height: 100px;
            background: rgba(156, 213, 159, 1); border-radius: 4px 0 0 4px; z-index: 100;"
          @click="toggleTabClick"><v-icon class="icon" :showTabItem="ui.showTabItem">keyboard_arrow_right</v-icon>
        </v-btn>
        <v-tabs vertical color="#00b248">
          <v-tab style="border-bottom: solid 1px rgba(0, 178, 72, 0.4);"><v-icon>description</v-icon></v-tab>
          <v-tab style="border-bottom: solid 1px rgba(0, 178, 72, 0.4);"><v-icon>code</v-icon></v-tab>
          <v-tab-item class="tab-item">
            <div style="font-size: 24px; color: #00b248; font-weight: 600; text-align: center; margin: 12px 0;">문제</div>
            <v-card flat style="background: rgba(0, 178, 72, 0.6); border-radius: 12px; min-width: 250px; margin-bottom: 20px;">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.content"></v-card-text>
            </v-card>
            <div style="font-size: 18px; color: #00b248; font-weight: 600; text-align: center; margin: 8px 0;">입력 예시</div>
            <v-card flat style="background: rgba(0, 178, 72, 0.6); border-radius: 12px; min-width: 250px;">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.inputDetail"></v-card-text>
            </v-card>
            <div style="font-size: 18px; color: #00b248; font-weight: 600; text-align: center; margin: 12px 0;">출력 예시</div>
            <v-card flat style="background: rgba(0, 178, 72, 0.6); border-radius: 12px; min-width: 250px;">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.outputDetail"></v-card-text>
            </v-card>
            <div style="font-size: 18px; color: #00b248; font-weight: 600; text-align: center; margin: 12px 0;">예시</div>
            <v-card flat style="background: rgba(0, 178, 72, 0.6); border-radius: 12px; min-width: 250px;">
              <v-card-text style="color: white; font-size: 16px;" v-html="problem.example"></v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item class="tab-item">
            <div style="font-size: 24px; color: #00b248; font-weight: 600; text-align: center; margin: 12px 0;">code</div>
            <v-card flat style="background: rgba(0, 178, 72, 0.6); border-radius: 12px; min-width: 250px;">
              <v-card-text style="color: white; font-size: 16px; white-space: pre;">{{pythonCode}}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
        
      </div>
      <div class="blockly-area" ref="blocklyArea" style="position: relative;">
        <div id="blocklyDiv" ref="blocklyDiv"></div>
        <v-btn fab dark color="#00b248"
          style="position: absolute; right: 116px; bottom: 136px; z-index: 999;"
          @click="run">
          <v-icon large>play_arrow</v-icon>
        </v-btn>
        <v-btn dark color="#00b248"
          style="position: absolute; right: 100px; bottom: 88px; z-index: 999;"
          @click="submit">
          제출하기
        </v-btn>
        <v-btn dark color="#00b248"
          style="; position: absolute; right: 100px; bottom: 40px; z-index: 999;"
          @click="initCode">
          코드초기화
        </v-btn>
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
