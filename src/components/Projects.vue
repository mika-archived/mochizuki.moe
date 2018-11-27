<template lang="pug">
  .container
    .text-center
      breadcrumb
    card
      h3.pb-6 個人プロジェクト

      .flex.flex-wrap.items-start
        .mb-4.pr-2(class="w-full sm:w-1/2 lg:w-1/3" v-for="project in projects" :key="project.name")
          project(:project="project")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Card from "@/presentationals/Card.vue";
import Project from "@/presentationals/Project.vue";

import { IProject } from "@/models/project";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    card: Card,
    project: Project
  }
})
export default class Projects extends Vue {
  @State((state: IRootState) => state.projects)
  public projects!: IProject[];
}
</script>

