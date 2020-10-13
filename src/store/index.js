import Vue from "vue";
import Vuex from "vuex";
import { tags } from "./modules/tags.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { tags },
});
