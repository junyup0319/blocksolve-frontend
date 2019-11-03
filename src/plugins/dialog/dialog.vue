<template>
  <div class="dialog"
    v-if="ui.show"
    style="position: fixed; left: 0; top: 0;
    width: 100vw; height: 100vh;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0, 0, 0, 0.2); z-index: 999;">
    <div style="width: 360px; height: 260px; background: #fff; border-radius: 8px; display: flex; flex-direction: column;">
      <div style="width: 100%; height: 44px; background: rgb(65, 165, 211); border-radius: 8px 8px 0 0;
        color: #fff; font-size: 16px; font-weight: 500; line-height: 44px; padding-left: 16px;">{{ui.title}}</div>
      <div style="width: 100%; height: 64%;
        font-size: 18px; text-align: center; overflow-y: auto;
        display: flex; justify-content: center; align-items: center; white-space: pre-wrap;">
        {{ui.message}}
      </div>
      <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; border-top: solid 1px #ccc;">
        <v-btn v-if="ui.showNegative" text width="72px" style="margin-right: 12px; color: #aaa;" @click="onNegative">{{ui.negative}}</v-btn>
        <v-btn dark color="rgb(65, 165, 211)" width="72px" style="margin-right: 12px;" @click="onPositive">{{ui.positive}}</v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./dialog.ts"/>

<style lang="scss" scoped>

</style>