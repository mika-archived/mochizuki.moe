<template lang="pug">
  i.fa-2x.fa-fw(:class="icon")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class FontAwesome extends Vue {
  @Prop(String) public icon!: string;
}
</script>