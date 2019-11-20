// file created at 2019-10-4
// Auto-generated files myPage.vue

<template>
  <div>
    <div v-if="$store.getters.user === null" style="width: 100%; height: 686px; background: rgba(0,0,0,0,1);
      display: flex; align-items: center; justify-content: center;">
      <v-btn @click="login" dark color="rgb(65, 165, 211)">로그인 하기</v-btn>
    </div>
    <div v-else class="content-zone">
      <div style="margin: 60px 80px;">
        <div class="profile-area">
          <div class="image-area">
            <div class="image">
              <img :src="$store.getters.user.photoURL" width="100%" height="100%"/>
            </div>
          </div>
          <div class="name-area">
            <div class="name">{{$store.getters.user.displayName}}</div>
            <div class="email">{{$store.getters.user.email}}</div>
            <div class="solve-info-area">
              <div class="content">
                <div class="desc">내가 푼 문제</div>
                <div class="count">{{solveCount}}</div>
              </div>
              <div class="content">
                <div class="desc">전체 문제</div>
                <div class="count">{{problemCount}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-descriptor">나의 풀이정보</div>
        <div class="table-area">
          <div class="table-item header">
            <div class="start-item">번호</div>
            <div class="options-2">제목</div>
            <div class="options-1">카테고리</div>
            <div class="options-1">만든이</div>
            <div class="options-1">제출 시간</div>
            <div class="end-item">제출 결과</div>
            <div style="width: 48px;"></div>
          </div>
          <div class="table-item items" v-for="(item, i) in submits" :key="'submit-' + i"
            :open="item.open" :last="i===status.length-1">
            <div class="content" style="display: flex;"  @click.stop="itemClick(i)">
              <div class="start-item">{{item.problem.pid}}</div>
              <div class="options-2">{{item.problem.title}}</div>
              <div class="options-1">{{item.problem.category}}</div>
              <div class="options-1">{{item.problem.creator}}</div>
              <div class="options-1">{{item.submit.submitAt}}</div>
              <div v-if="item.submit.result" class="end-item testResult" :isCorrect="item.submit.result">성공</div>
              <div v-else class="end-item testResult" :isCorrect="item.submit.result">실패</div>
              <v-icon class="icon" style="margin: 0 12px;">arrow_drop_down</v-icon>
            </div>
            <div class="details" v-for="(test, i) in item.submit.testCase" :key="'testcase-' + i" style="border-top: solid 1px #ccc; padding-left: 20px;">
              <div class="detail-item">
                <div class="detail-content">test case {{i+1}}</div>
                <div class="detail-content-end" v-if="test.result">test case {{i+1}}이 맞았습니다!</div>
                <div class="detail-content-end" v-else>test case {{i+1}}이 틀렸습니다!</div>
              </div>
            </div>
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
