<template lang="pug">
  .mx-auto.border.border-grey-light.rounded-full.shadow-md
    img.border-4.border-white.rounded-full(:src="src" alt="avatar")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Avatar extends Vue {
  @Prop(String) public src!: string;
}
</script>
