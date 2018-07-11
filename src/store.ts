import Vue from "vue";
import Vuex from "vuex";

import { IRootState } from "@/models/state";
import { links } from "@/models/constants/links";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    links,
  },
  mutations: {

  },
  actions: {

  },
});
