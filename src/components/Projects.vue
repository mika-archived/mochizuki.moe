<template lang="pug">
  .content(data-content="sub")
    breadcrumb
    .card
      .card-header
        .card-title.h3 Projects
      .card-body
        .items
          .item(v-for="project in projects" :key="project.name")
            project(:project="project")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Project from "@/presentationals/Project.vue";

import { IProject } from "@/models/project";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    project: Project
  }
})
export default class Projects extends Vue {
  @State((state: IRootState) => state.projects)
  public projects!: IProject[];
}
</script>

