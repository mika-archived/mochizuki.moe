<template lang="pug">
  .flex.justify-center.min-h-screen
    .self-center
      transition(name="transition-animate" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
        router-view
</template>
