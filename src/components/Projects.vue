<template lang="pug">
  .content
    breadcrumb
    .card
      .card-header
        .card-title.h3 Projects
      .card-body
        .items
          .item(v-for="project in projects" :key="project.name")
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
              a(:href="project.website" target="_blank") Website
              br
              | {{project.description}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import FontAwesome from "@/presentationals/FontAwesome.vue";

import { IProject } from "@/models/project";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    "font-awesome": FontAwesome
  }
})
export default class Projects extends Vue {
  @State((state: IRootState) => state.projects)
  public projects!: IProject[];

  public asClass(language: string): string {
    return `badge-${language
      .toLocaleLowerCase()
      .replace("#", "sharp")
      .replace("+", "plus")}`;
  }
}
</script>

<style lang="scss" scoped>
.content {
  /*
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: row;
  */
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 640px) {
    max-width: 90%;
  }

  @media (min-width: 960px) {
    max-width: 80%;
  }

  .items {
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;

    .item {
      @media (min-width: 640px) {
        flex: 0 1 100%;
      }

      @media (min-width: 840px) {
        flex: 0 1 50%;
      }

      @media (min-width: 1420px) {
        flex: 0 1 33%;
      }

      align-self: stretch;
      padding: 7.5px;

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
    }
  }
}
</style>
