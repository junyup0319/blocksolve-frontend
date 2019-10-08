// file created at 2019-10-4
// Auto-generated files myPage.vue

<template>
  <div>
    <div v-if="$store.getters.user === null" style="width: 100%; height: 686px; background: rgba(0,0,0,0,1);
      display: flex; align-items: center; justify-content: center;">
      <v-btn @click="login" dark color="#00b248">로그인 하기</v-btn>
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
                <div class="count">10</div>
              </div>
            </div>
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
          <div class="table-item items" v-for="(item, i) in ui.itemDetails" :key="i"
            :open="item">
            <div class="content" style="display: flex;"  @click.stop="itemClick(i)">
              <div class="start-item">title</div>
              <div class="options-1" style="padding-left: 4px;">.category</div>
              <div class="options-1" style="padding-left: 4px;">creator</div>
              <div class="options-1" style="padding-left: 4px;">submitCount</div>
              <div class="options-1" style="padding-left: 4px;">correctRate</div>
              <div class="end-item"  style="padding-left: 4px;">contents</div>
              <v-icon class="icon" style="margin-right: 8px;">arrow_drop_down</v-icon>
            </div>
            <div class="details" v-for="(item, i) in 3" :key="i+'item'" style="border-top: solid 1px #ccc; padding-left: 20px;">
              <div class="detail-item">
                <div class="detail-content">test case1</div>
                <div class="detail-content">2019-10-1 20:00</div>
                <div class="detail-content-end" style="">test case1이 맞았습니다!</div>
                
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
