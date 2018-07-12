<template lang="pug">
  div
    h4
      | {{project.name}}
      template(v-if="project.isArchived")
        small.text-gray &nbsp;archived
    p
      span.badge(v-for="language in project.languages" :class="asClass(language)")
        | {{language}}
      br
      template(v-if="project.isOpenSource")
        a(:href="`https://github.com/${project.repository}`" target="_blank") GitHub
        | ・
      dynamic-link(:href="project.website") Website
      br
      | {{project.description}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import DynamicLink from "@/presentationals/DynamicLink.vue";

import { IProject } from "@/models/project";

@Component({
  components: {
    "dynamic-link": DynamicLink
  }
})
export default class Project extends Vue {
  @Prop(Object) public project!: IProject;

  public asClass(language: string): string {
    return `badge-${language
      .toLocaleLowerCase()
      .replace("#", "sharp")
      .replace("+", "plus")}`;
  }
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5 {
  margin-bottom: 0.2em;
}

.badge {
  margin: 0 5px 0 0;

  &::not(:first-child) {
    margin: 0 5px;
  }

  &::after {
    content: none;
  }
}
</style>
