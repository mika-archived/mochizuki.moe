<template lang="pug">
  div
    h4
      | {{contribution.name}}
    p
      template
        language-badges(:languages="contribution.languages")
        template(v-if="contribution.isOpenSource")
          a(:href="`https://github.com/${contribution.repository}`" target="_blank") GitHub
          | ・
        a(:href="contribution.website" target="_blank") Website
        br
        template(v-if="contribution.role")
          | Work as : 
          ul
            li.role(v-for="role in contribution.role" :key="role")
              | {{role}}
        template(v-if="contribution.prs")
          | Merged PRs : 
          ul
            li.role(v-for="pr in contribution.prs" :key="pr")
              a(:href="`https://github.com/${contribution.repository}/pull/${pr}`" target="_blank")
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
