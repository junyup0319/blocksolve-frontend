import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    signIn(state, user) {
      state.user = user;
    },
    signOut(state) {
      state.user = null;
    },
  },
  actions: {

  },
  getters: {
    user: (state) => state.user,
  },
});
