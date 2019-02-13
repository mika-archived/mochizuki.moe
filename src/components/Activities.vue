<template lang="pug">
  .container(data-content="sub")
    .text-center
      breadcrumb

    card
      h3.pb-6 日々の活動
    
      section
        p
          a(href="https://pixe.la" target="_blank" rel="noreferrer") Pixela
          | に記録している、日々の何らかの活動です。

        .mt-2.flex.flex-wrap.items-start
          .mb-4.pr-2(class="w-full lg:w-1/2" v-for="activity in activities" :key="activity.name")
            h5.pb-2 {{activity.name}}
            a(:href="activity.id | href")
              img(:src="activity.id | svg")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Card from "@/presentationals/Card.vue";

import { IActivity } from "@/models/activity";
import { IRootState } from "@/models/state";

function href(id: string): string {
  return `https://pixe.la/v1/users/mika/graphs/${id}.html`;
}

function svg(id: string): string {
  return `https://pixe.la/v1/users/mika/graphs/${id}`;
}

@Component({
  components: {
    breadcrumb: Breadcrumb,
    card: Card
  },
  filters: {
    href,
    svg
  }
})
export default class Activities extends Vue {
  @State((state: IRootState) => state.activities)
  public activities!: IActivity;
}
</script>

<style lang="scss" scoped>
img {
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }

  @media screen and (min-width: 481px) {
    min-width: 360px;
  }
}
</style>
