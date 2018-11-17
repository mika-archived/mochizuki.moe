<template lang="pug">
  .content(data-content="sub")
    breadcrumb
    .card
      .card-header
        .card-title.h3 お仕事とかそういうの
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
