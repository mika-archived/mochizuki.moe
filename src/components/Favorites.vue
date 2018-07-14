<template lang="pug">
  .content(data-content="sub")
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
section {
  padding: 0 0 20px 0;

  &:last-child {
    padding: 0 0 10px 0;

    .divider {
      display: none;
    }
  }

  .items {
    .item {
      align-self: auto;
      padding: 0;
    }
  }
}
</style>
