import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL:'http://localhost:8080/todotest/todo-backend'
  },
  mutations: {},
  actions: {},
  modules: {}
});
