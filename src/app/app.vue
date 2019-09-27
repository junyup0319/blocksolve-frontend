<template>
  <v-app>
    <div class="nav-wrapper">
      <div class="nav content-zone">
        <div class="nav-title" @click="$router.push('/')">BlockSolve</div>
        <v-tabs color="#00b248" right>
          <v-tab @click="$router.push('/problemlist')">문제 리스트</v-tab>
          <v-tab>카테고리<v-icon>arrow_drop_down</v-icon></v-tab>
          <v-tab @click="$router.push('/myPage')">마이페이지</v-tab>
        </v-tabs>
        <v-btn small fab dark color="#00b248" style="margin: 0 0 12px 0; width: 32px; height: 32px;">
          <v-icon small>person</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- <v-app-bar app color="#2bbd7e" dark>
      <v-app-bar-nav-icon color="#eee" @click="ui.showNav = !ui.showNav"></v-app-bar-nav-icon>
      
      <v-toolbar-title style="color: #eee; font-weight: 800; font-size: 20px;">BlockSolve</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="#008c46">login</v-btn>
    </v-app-bar> -->
    <!-- <v-navigation-drawer app v-model="ui.showNav" width="200px">
      <v-list-item b>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav style="padding-bottom: 0px;"
        v-for="(item) in listItem" :key="item.name">
        <v-list-item link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer> -->
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
