<template lang="pug">
  .content(data-content="sub")
    breadcrumb
    .card
      .card-header
        .card-title.h3 パーソナリティ
      .card-body
        section
          p
            | 私の個人の属性は...
            ul
              li マイナス思考
              li 情緒不安定
              li 自己否定的
              li メンヘラ
            | 働くのには向いていないと思うけど、何かしら新しいものを作るのは好きです。
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import FontAwesome from "@/presentationals/FontAwesome.vue";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    "font-awesome": FontAwesome
  }
})
export default class Personality extends Vue {
  // Nothing!
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;

  section {
    margin: 0 0 10px 0;
  }

  .card {
    text-align: initial;
    max-width: 625px;
  }

  .items {
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    .item {
      padding: 0 5px 0 0;
    }
  }
}
</style>
