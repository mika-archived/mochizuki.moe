<template lang="pug">
  .container
    .text-center
      breadcrumb
    card 
      h3.pb-6 お仕事とかそういうの

      .flex.flex-wrap.items-start
        .mb-4.pr-2(class="w-full sm:w-1/2 lg:w-1/3" v-for="contribution in contributions" :key="contribution.name")
          contribution(:contribution="contribution")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Card from "@/presentationals/Card.vue";
import Contribution from "@/presentationals/Contribution.vue";

import { IProject } from "@/models/project";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    card: Card,
    contribution: Contribution
  }
})
export default class Contributions extends Vue {
  @State((state: IRootState) => state.contributions)
  public contributions!: IProject[];
}
</script>
