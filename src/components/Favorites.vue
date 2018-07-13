<template lang="pug">
  .content
    breadcrumb
    .card
      .card-header
        .card-title.h3 Favorites
      .card-body
        section(v-for="favorite in favorites.categories" :key="favorite.name")
          h5 {{favorite.name}}
          .items
            .item(v-for="favorite in favorite.favorites" :key="favorite.name")
              | ・
              a(:href="favorite.href" target="_blank") {{favorite.name}}
          .divider
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Contribution from "@/presentationals/Contribution.vue";

import { ICategorizedFavorites } from "@/models/favorite";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    contribution: Contribution
  }
})
export default class Favorites extends Vue {
  @State((state: IRootState) => state.favorites)
  public favorites!: ICategorizedFavorites;
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

    section {
      padding: 0 0 20px 0;

      &:last-child {
        padding: 0 0 10px 0;

        .divider {
          display: none;
        }
      }

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
        }
      }
    }
  }
}
</style>
