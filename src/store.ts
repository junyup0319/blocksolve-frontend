import Vue from 'vue';
import Vuex from 'vuex';
import {Problem as ProblemForm, Solution as SolutionForm, Submit as SubmitForm} from '@/lib/form';

Vue.use(Vuex);
interface State {
  user: null | object;
  problems: ProblemForm[];
  solutions: SolutionForm[];
  submits: SubmitForm[];
}

export default new Vuex.Store<State>({
  state: {
    user: null,
    problems: [],
    solutions: [],
    submits: [],
  },
  mutations: {
    signIn(state, user) {
      state.user = user;
    },
    signOut(state) {
      state.user = null;
    },
    setProblems(state, problems: ProblemForm[]) {
      state.problems = problems;
    },

    setSolutions(state, solutions: SolutionForm[]) {
      state.solutions = solutions;
    },
    addSolution(state, solution: SolutionForm) {
      state.solutions.unshift(solution);
    },

    setSubmits(state, submits: SubmitForm[]) {
      state.submits = submits;
    },
    addSubmit(state, submit: SubmitForm) {
      state.submits.unshift(submit);
    },
  },
  actions: {

  },
  getters: {
    user: (state) => state.user,
    problems: (state) => state.problems,
    solutions: (state) => state.solutions,
    submits: (state) => state.submits,
  },
});
