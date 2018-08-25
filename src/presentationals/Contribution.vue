<template lang="pug">
  div
    h4
      | {{contribution.name}}
    p
      template
        language-badges(:languages="contribution.languages")
        template(v-if="contribution.isOpenSource")
          a(:href="repositoryUrl" target="_blank") {{repositoryProvider}}
          | ・
        a(:href="contribution.website" target="_blank") Website
        br
        template(v-if="contribution.role")
          | Work as : 
          ul
            li.role(v-for="role in contribution.role" :key="role")
              | {{role}}
        template(v-if="contribution.prs")
          | {{`Merged PR${contribution.prs.length == 1 ? "" : "s"} :`}} 
          ul
            li.role(v-for="pr in contribution.prs" :key="pr")
              a(:href="prUrl(pr)" target="_blank")
                | {{`#${pr}`}}


</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import LanguageBadges from "@/presentationals/LanguageBadges.vue";

import { IProject } from "@/models/project";

@Component({
  components: {
    "language-badges": LanguageBadges
  }
})
export default class Contribution extends Vue {
  @Prop(Object) public contribution!: IProject;

  public get repositoryProvider(): string {
    return (this.contribution.repository || "").indexOf("gitlab") ? "GitLab" : "GitHub";
  }

  public get repositoryUrl(): string {
    return this.repositoryProvider === "GitHub"
      ? `https://github.com/${this.contribution.repository}`
      : (this.contribution.repository as string);
  }

  public prUrl(pr: number): string {
    return this.repositoryProvider === "GitHub"
      ? `https://github.com/${this.contribution.repository}/pull/${pr}`
      : `${this.contribution.repository}/merge_requests/${pr}`;
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

ul {
  display: inline;
  list-style: none;
  margin: 0;

  li {
    display: inline;
  }

  .role {
    margin: 0 2.5px 0 0;

    &:not(:last-child) {
      &:after {
        content: ",";
      }
    }
  }
}
</style>
