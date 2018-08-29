<template lang="pug">
  .round
    img(:src="src" alt="avatar")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Avatar extends Vue {
  @Prop(String) public src!: string;
}
</script>

<style lang="scss" scoped>
.round {
  border-radius: 100% !important;
  border: 1px solid #cccccc;
  margin: 0 auto;
  height: 100%;
  width: 100%;

  img {
    border-radius: 100%;
    border: 5px solid white;
    box-shadow: 1.5px 1.5px 5px #aaaaaa;
    height: 99.5%;
    width: 99.5%;
  }
}
</style>
