// file created at 2019-9-24
// Auto-generated files ide.vue

<template>
  <div>
    <div class="ide-area">
      <div class="tab-area" :showTabItem="ui.showTabItem">
        <v-tabs vertical color="#00b248">
          <v-tab style="border-bottom: solid 1px rgba(0, 178, 72, 0.4);"><v-icon>description</v-icon></v-tab>
          <v-tab style="border-bottom: solid 1px rgba(0, 178, 72, 0.4);"><v-icon>bug_report</v-icon></v-tab>
          <v-btn class="tab-button" icon width="100%" style="border-radius: 0px;"
            @click="ui.showTabItem = !ui.showTabItem"><v-icon class="icon" :showTabItem="ui.showTabItem">keyboard_arrow_right</v-icon>
          </v-btn>
          <v-tab-item class="tab-item">
            <div style="font-size: 24px; color: #00b248; font-weight: 600; text-align: center; margin: 12px 0;">문제</div>
            <v-card flat style="background: rgba(0, 178, 72, 0.6); border-radius: 12px;">
              <v-card-text style="color: white; font-size: 16px;">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item> 2
          </v-tab-item>
        </v-tabs>
        
      </div>
      <div class="blockly-area"></div>
    </div>
  </div>
</template>
<script src='./ide.ts'>

</script>
<style lang='scss' scoped>
@import "../../style/_common.scss";
@import "./ide.scss";
</style>
