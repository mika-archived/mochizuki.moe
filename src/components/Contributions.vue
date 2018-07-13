<template lang="pug">
  .content
    breadcrumb
    .card
      .card-header
        .card-title.h3 I contribute to ...
      .card-body
        .items
          .item(v-for="contribution in contributions" :key="contribution.name")
            contribution(:contribution="contribution")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Contribution from "@/presentationals/Contribution.vue";

import { IProject } from "@/models/project";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    contribution: Contribution
  }
})
export default class Contributions extends Vue {
  @State((state: IRootState) => state.contributions)
  public contributions!: IProject[];
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

  .card {
    width: 100%;

    .items {
      width: 100%;

      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;

      .item {
        flex: 0 1 100%;
        min-width: 100%;

        @media (min-width: 640px) {
          flex: 0 1 100%;
          min-width: 100%;
        }

        @media (min-width: 840px) {
          flex: 0 1 50%;
          min-width: 50%;
        }

        @media (min-width: 1420px) {
          flex: 0 1 33%;
          min-width: 33%;
        }

        align-self: stretch;
        padding: 7.5px;
      }
    }
  }
}
</style>
