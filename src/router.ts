import Vue from "vue";
import Router from "vue-router";

import Contributions from "@/components/Contributions.vue";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contributions",
      name: "contributions",
      component: Contributions
    }
  ],
});
