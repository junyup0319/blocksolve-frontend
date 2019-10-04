// file created at 2019-10-4
// Auto-generated files myPage.vue

<template>
  <div class="content-zone">
    <div style="margin: 60px 80px;">
      <div class="profile-area">
        <div class="image-area"></div>
        <div class="name-area">
          <div class="name">abc</div>
          <div class="email">email.com</div>
        </div>
      </div>
      <div class="table-descriptor">나의 풀이정보</div>
      <div class="table-area">
        <div class="table-item header">
          <div class="start-item">제목</div>
          <div class="options-1">카테고리</div>
          <div class="options-1">만든이</div>
          <div class="options-1">제출</div>
          <div class="options-1">정답 비율</div>
          <div class="end-item">설명</div>
        </div>
        <div class="table-item items" v-for="(item, i) in ui.itemDetails" :key="i" :open="item"
          @click="ui.itemDetails[i] = !item">
          <div class="content" style="display: flex;">
            <div class="start-item">title</div>
            <div class="options-1" style="padding-left: 4px;">.category</div>
            <div class="options-1" style="padding-left: 4px;">problem.creator</div>
            <div class="options-1" style="padding-left: 4px;">problem.submitCount</div>
            <div class="options-1" style="padding-left: 4px;">problem.correctRate</div>
            <div class="end-item"  style="padding-left: 4px;">problem.contents</div>
            <v-icon class="icon" style="margin-right: 8px;">arrow_drop_down</v-icon>
          </div>
          <div class="details" style="margin-top: 4px; border-top: solid 1px #ccc;">
            abc
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script src='./myPage.ts'>

</script>
<style lang='scss' scoped>
@import "../../style/_common.scss";
@import "./myPage.scss";
</style>
