<template lang="pug">
  #app.container
    transition(name="transition-animate" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
      router-view
</template>

<style lang="scss">
html,
body {
  min-width: 100vw;
  min-height: 100vh;
}

body {
  background-image: url("./assets/memphis-colorful.png");
  background-repeat: repeat;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background-color: rgba(168, 168, 168, 0);
  min-height: 100vh;
}

.animated {
  animation-duration: 0.25s;
}
</style>
