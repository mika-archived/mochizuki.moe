<template lang="pug">
  div
    span.badge(v-for="language in languages" :class="asClass(language)")
      | {{language}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class LanguageBadges extends Vue {
  @Prop(Array) public languages!: string[];

  public asClass(language: string): string {
    return `badge-${language
      .toLocaleLowerCase()
      .replace("#", "sharp")
      .replace(/\+/g, "plus")}`;
  }
}
</script>

<style lang="scss" scoped>
.badge {
  margin: 0 5px 0 0;

  &::not(:first-child) {
    margin: 0 5px;
  }

  &::after {
    content: none;
  }

  &-hlsl {
    color: #000;
    background-color: #ccc;
  }
}
</style>
