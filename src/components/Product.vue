<template lang="pug">
  section
    h5 {{product.name}}
    p
      language(v-for="language in product.languages" :language="language" :key="language")
      br
      small
        a(:href="`https://github.com/${product.repo}`" target="_blank") GitHub
        | ・
        a(:href="product.url" target="_blank") Link
      br
      | {{product.description}}
</template>

<script>
import Language from "./Language.vue";

export default {
  name: "Product",
  components: { Language },
  props: ["product"]
};
</script>

<style lang="scss" scoped>
h5 {
  margin-bottom: 0;
}
</style>
