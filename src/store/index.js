import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter(state) {
      return `${state.counter} clicks`;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state, payload) {
      state.counter -= payload;
    },
  },
  actions: {
    increment: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.timeout);
    },
    decrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.timeout);
    },
  },
  modules: {
  },
});
