<template lang="pug">
  .container
    .text-center
      breadcrumb

    card
      h3.pb-6 パーソナリティ

      section
        p
          | 私の個人の属性は...
          ul.m-4
            li マイナス思考
            li 情緒不安定
            li 自己否定的
            li メンヘラ
          | 働くのには向いていないと思うけど、何かしら新しいものを作るのは好きです。
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import Breadcrumb from "@/presentationals/Breadcrumb.vue";
import Card from "@/presentationals/Card.vue";

@Component({
  components: {
    breadcrumb: Breadcrumb,
    card: Card
  }
})
export default class Personality extends Vue {
  // Nothing!
}
</script>
