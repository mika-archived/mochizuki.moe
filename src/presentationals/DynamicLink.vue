<template lang="pug">
  component(:is="type" v-bind="bindings")
    slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DynamicLink extends Vue {
  @Prop(String) public href!: string;

  public get type(): string {
    if (this.href.startsWith("http")) {
      return "a";
    }
    return "router-link";
  }

  public get bindings(): any {
    if (this.type === "a") {
      return {
        href: this.href,
        target: "_blank"
      };
    }
    return {
      to: this.href
    };
  }
}
</script>
