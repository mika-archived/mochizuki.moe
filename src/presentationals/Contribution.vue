<template lang="pug">
  div
    h4.pb-2
      | {{contribution.name}}
    div
      language-badges(:languages="contribution.languages")
      p.leading-normal
        template(v-if="contribution.isOpenSource")
          a(:href="repositoryUrl" target="_blank" rel="noreferrer") {{repositoryProvider}}
          | ・
        a(:href="contribution.website" target="_blank" rel="noreferrer") Website
        br
        template(v-if="contribution.role")
          | 担当 : 
          ul.inline
            li.inline.mr-1.role(v-for="role in contribution.role" :key="role")
              | {{role}}
        template(v-if="contribution.prs")
          | {{`Merged PR${contribution.prs.length == 1 ? "" : "s"} :`}} 
          ul.inline
            li.inline.mr-1.role(v-for="pr in contribution.prs" :key="pr")
              a(:href="prUrl(pr)" target="_blank" rel="noreferrer")
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
  @Prop(Object)
  public contribution!: IProject;

  public get repositoryProvider(): string {
    return (this.contribution.repository || "").indexOf("gitlab") > 0 ? "GitLab" : "GitHub";
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
ul {
  .role {
    &:not(:last-child) {
      &:after {
        content: ",";
      }
    }
  }
}
</style>
