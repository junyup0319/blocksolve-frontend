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
                <div class="count">1</div>
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
            <div style="width: 44px;"></div>
          </div>
          <div class="table-item items" v-for="(item, i) in status" :key="i"
            :open="item.open" :last="i===status.length-1">
            <div class="content" style="display: flex;"  @click.stop="itemClick(i)">
              <div class="start-item">{{item.pid}}</div>
              <div class="options-2">{{item.title}}</div>
              <div class="options-1">{{item.category}}</div>
              <div class="options-1">{{item.creator}}</div>
              <div class="options-1">abc</div>
              <div v-if="testResult[i]" class="end-item testResult" :isCorrect="testResult[i]">성공</div>
              <div v-else class="end-item testResult" :isCorrect="testResult[i]">실패</div>
              <v-icon class="icon" style="margin-right: 20px;">arrow_drop_down</v-icon>
            </div>
            <div class="details" v-for="(test, i) in item.testresult" :key="'testcase'+i" style="border-top: solid 1px #ccc; padding-left: 20px;">
              <div class="detail-item">
                <div class="detail-content">test case {{i+1}}</div>
                <div class="detail-content">{{test.result}}</div>
                <div class="detail-content-end">test case1이 맞았습니다!</div>
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
