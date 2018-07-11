<template lang="pug">
  #app.container
    router-view
</template>

<style lang="scss">
html,
body {
  min-width: 100vw;
  min-height: 100vh;
}

body {
  background-image: url("./assets/pattern/memphis-colorful.png");
  background-repeat: repeat;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: rgba(168, 168, 168, 0);
  min-height: 100vh;
}
</style>
