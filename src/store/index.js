import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'Find work', done: false },
      { id: 2, text: 'Buy house', done: false },
      { id: 3, text: 'Buy car', done: false },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
