<template lang="pug">
  .content(data-content="sub")
    breadcrumb
    .card
      .card-header
        .card-title.h3 Personality
      .card-body
        section
          p
            | My personality attributes are...
            ul
              li Introverted
              li Mentally Unstable
              li Turbulent
              li Self-denial
            | I think, I am not suited for working.
            | But, I like to make a new things.
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
