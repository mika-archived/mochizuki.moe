<template lang="pug">
  div
    h4.mb-2
      | {{project.name}}
      template(v-if="project.isArchived")
        small.text-gray &nbsp;archived

    section
      language-badges(:languages="project.languages")
      p.leading-normal
        template(v-if="project.isOpenSource")
          a(:href="`https://github.com/${project.repository}`" target="_blank" rel="noreferrer") GitHub
          | ・
        dynamic-link(:href="project.website") Website
        br
        | {{project.description}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import DynamicLink from "@/presentationals/DynamicLink.vue";
import LanguageBadges from "@/presentationals/LanguageBadges.vue";

import { IProject } from "@/models/project";

@Component({
  components: {
    "dynamic-link": DynamicLink,
    "language-badges": LanguageBadges
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
