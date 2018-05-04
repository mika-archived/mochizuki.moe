<template lang="pug">
  b-badge.badge(:variant="getVariantColor(language)") {{language}}
</template>

<script>
export default {
  name: "Language",
  props: ["language"],
  methods: {
    getVariantColor(language) {
      return language
        .replace("+", "plus")
        .replace("#", "sharp")
        .toLowerCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.badge {
  margin: 0 2px;
}
</style>
