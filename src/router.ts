import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/views/main';
import ProblemList from '@/views/problem-list';
import IDE from '@/views/ide';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/problemlist',
      name: 'problem-list',
      component: ProblemList,
    },
    {
      path: '/ide/:pid',
      name: 'ide',
      component: IDE,
    },
  ],
});
