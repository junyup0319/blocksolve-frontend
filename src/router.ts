import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/views/main';
import ProblemList from '@/views/problem-list';
import Problem from '@/views/problem';

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
      path: '/problems',
      name: 'problem-list',
      component: ProblemList,
    },
    {
      path: '/problems/category',
      name: 'category-list',
      component: ProblemList,
    },
    {
      path: '/problems/:pid',
      name: 'problem',
      component: Problem,
    },

  ],
});
