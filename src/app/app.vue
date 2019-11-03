<template>
  <v-app>
    <div class="nav-wrapper">
      <div class="nav content-zone">
        <div class="nav-title" @click="$router.push('/')">BLOCKSOLVE</div>
        <v-tabs color="rgb(65, 165, 211)" right>
          <v-tab to="/">메인 페이지</v-tab>
          <v-tab to="/problems">문제 리스트</v-tab>
          <!-- <v-tab style="position: relative; padding-right: 12px;">카테고리
            <v-icon>arrow_drop_down</v-icon>
          </v-tab> -->
          <v-tab to="/mypage">마이페이지</v-tab>
        </v-tabs>
        <div style="width: 120px; padding-bottom: 8px; margin-left: 12px;
          display: flex; align-items; bottom; justify-content: center;">
          <v-btn v-if="$store.getters.user === null" small fab dark color="rgb(65, 165, 211)" style="width: 32px; height: 32px;"
            @click="login">
            <v-icon small>person</v-icon>
          </v-btn>
          <v-btn v-else @click="logout" dark color="#ccc" style="width: 80px; height: 32px;">logout</v-btn>
        </div>
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
