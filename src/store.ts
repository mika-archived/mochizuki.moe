import Vue from "vue";
import Vuex from "vuex";

import { IRootState } from "@/models/state";
import { links } from "@/models/constants/links";
import { projects } from "@/models/constants/projects";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    links,
    projects,
  },
  mutations: {

  },
  actions: {

  },
});
