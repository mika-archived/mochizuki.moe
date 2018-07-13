<template lang="pug">
  ul.breadcrumb
    li.breadcrumb-item
      router-link(to="/") Home
    li.breadcrumb-item(v-for="(route, index) in hierarchy" :key="route.route")
      template(v-if="index == (hierarchy.length - 1)")
        | {{route.name}}
      template(v-else)
        router-link(:to="route.route") {{route.name}}
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Breadcrumb extends Vue {
  public hierarchy: Array<{}> = [];

  public created(): void {
    const routes = this.$route.path.split("/").slice(1);
    routes.forEach(route => {
      this.hierarchy.push({
        name: route.charAt(0).toUpperCase() + route.slice(1),
        route
      });
    });
  }
}
</script>
