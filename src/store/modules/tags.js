import { getTags } from "@/api/tags";
import { FETCH_TAGS } from "../action-types";
import { GET_TAGS } from "../getter-types";
import { SET_TAGS } from "../mutation-types";

export const tags = {
  state: () => ({
    tagsData: [],
    error: null,
  }),
  mutations: {
    [SET_TAGS] (state, payload) {
      state.tagsData = payload;
    },
    setError (state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async [FETCH_TAGS] ({ commit }) {
      try {
        const { data } = await getTags();
        commit(SET_TAGS, data);
      } catch (error) {
        commit("setError", error);
      }
    },
  },
  getters: {
    [GET_TAGS] (state) {
      return state.tagsData;
    },
    error (state) {
      return state.error;
    },
  },
};
