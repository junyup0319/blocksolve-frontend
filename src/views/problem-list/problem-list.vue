// file created at 2019-9-24
// Auto-generated files problem-list.vue

<template>
  <div>
    <div class="problemlist-content-area content-zone content-zone-padding">
      <div class="problemlist-despriptor">전체 문제
        <div class="flex"></div>
        <a-select size="small" defaultValue="25" style="font-size: 12px">
          <a-select-option value="25">25개씩 보기</a-select-option>
          <a-select-option value="50">50개씩 보기</a-select-option>
          <a-select-option value="75">75개씩 보기</a-select-option>
          <a-select-option value="100">100개씩 보기</a-select-option>
        </a-select>
      </div>

      <div class="table-area">
        <div class="table-item header">
          <div class="start-item">제목</div>
          <div class="options-1">카테고리</div>
          <div class="options-1">만든이</div>
          <div class="options-1">제출</div>
          <div class="options-1">정답 비율</div>
          <div class="end-item">설명</div>
        </div>
        <div class="table-item items"
            v-for="(problem, i) in problems" :key="'problem' + i"
            @click="clickItem(problem.pid)">
          <div class="start-item">{{problem.title}}</div>
          <div class="options-1" style="padding-left: 4px;">{{problem.category}}</div>
          <div class="options-1" style="padding-left: 4px;">{{problem.creator}}</div>
          <div class="options-1" style="padding-left: 4px;">{{problem.submitCount}}</div>
          <div class="options-1" style="padding-left: 4px;">{{problem.correctRate}}</div>
          <div class="end-item"  style="padding-left: 4px;">{{problem.contents}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./problem-list.ts'>

</script>
<style lang='scss' scoped>
@import "../../style/_common.scss";
@import "./problem-list.scss";
</style>
