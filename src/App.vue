<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic");
  font-weight: 300;
}

@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic");
  font-weight: 500;
}

@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic");
  font-weight: bold;
}

@font-face {
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue Regular");
  font-weight: 100;
}

@font-face {
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue Regular");
  font-weight: 200;
}

body {
  background-image: url(./static/memphis-colorful.png);
  background-repeat: repeat;
  background-size: 400px 400px;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Original Yu Gothic", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(249, 249, 249, 0.5);
  color: #2c3e50;
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 20px;
}
</style>
