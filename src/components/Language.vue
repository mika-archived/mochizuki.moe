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

<style lang="scss">
/* Global Stylesheet of Badges */
/* Colors from GitHub */
.badge-typescript {
  color: #fff;
  background-color: #2b7489;
}

.badge-ruby {
  color: #fff;
  background-color: #701516;
}

.badge-vue {
  color: #fff;
  background-color: #2c3e50;
}

.badge-csharp {
  color: #fff;
  background-color: #178600;
}

.badge-javascript {
  color: #000;
  background-color: #f1e05a;
}
</style>

<style lang="scss" scoped>
.badge {
  margin: 0 2px;
}
</style>
