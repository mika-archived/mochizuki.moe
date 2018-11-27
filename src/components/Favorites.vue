<template lang="pug">
  .container(data-content="sub")
    .text-center
      breadcrumb
    
    card
      h3.pb-6 好きなもの
      
      section(v-for="(favorite, idx) in favorites.categories" :key="favorite.name")
        h5.pb-2 {{favorite.name}}
        .flex.flex-wrap
          p.leading-normal(class="w-full sm:w-1/2 lg:w-1/3" v-for="favorite in favorite.favorites" :key="favorite.name")
            | ・
            a(:href="favorite.href" target="_blank" rel="noreferrer") {{favorite.name}}
        template(v-if="idx + 1 !== favorites.categories.length")
          .divider.pb-4
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Card from "@/presentationals/Card.vue";

import { ICategorizedFavorites } from "@/models/favorite";
import { IRootState } from "@/models/state";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    card: Card
  }
})
export default class Favorites extends Vue {
  @State((state: IRootState) => state.favorites)
  public favorites!: ICategorizedFavorites;
}
</script>
