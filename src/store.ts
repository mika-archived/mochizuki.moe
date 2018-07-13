import Vue from "vue";
import Vuex from "vuex";

import { IRootState } from "@/models/state";
import { contributions } from "@/models/constants/contributions";
import { favorites } from "@/models/constants/favorites";
import { links } from "@/models/constants/links";
import { projects } from "@/models/constants/projects";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    contributions,
    favorites,
    links,
    projects,
  },
  mutations: {

  },
  actions: {

  },
});
