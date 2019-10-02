<template>
  <v-app>
    <div class="nav-wrapper">
      <div class="nav content-zone">
        <div class="nav-title" @click="$router.push('/')">BlockSolve</div>
        <v-tabs color="#00b248" right>
          <v-tab to="/">메인 페이지</v-tab>
          <v-tab to="/problems">문제 리스트</v-tab>
          <v-tab to="/problems/category">카테고리<v-icon>arrow_drop_down</v-icon></v-tab>
          <v-tab to="/mypage">마이페이지</v-tab>
        </v-tabs>
        <v-btn small fab dark color="#00b248" style="margin: 0 0 12px 24px; width: 32px; height: 32px;">
          <v-icon small>person</v-icon>
        </v-btn>
      </div>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script src="./app.ts">
</script>

<style scoped lang="scss">
@import '../style/_common.scss';
@import './app.scss';
</style>
