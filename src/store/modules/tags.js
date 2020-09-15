import { getTags } from "../../api/tags";

export const tags = {
  namespaced: true,
  state: () => ({
    tagsData: [],
    error: null,
  }),
  mutations: {
    setTags(state, payload) {
      state.tagsData = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchTags({ commit }) {
      try {
        const { data } = await getTags();
        commit("setTags", data);
      } catch (error) {
        commit("setError", error);
      }
    },
  },
  getters: {
    tags(state) {
      return state.tagsData;
    },
    error(state) {
      return state.error;
    },
  },
};
