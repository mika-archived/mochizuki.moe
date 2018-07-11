<template lang="pug">
  .content
    section
      avatar.avatar-local(src="https://www.gravatar.com/avatar/8f7571eb815b4c6b2ef883b1c8ed97dd?s=256")
    
    section
      h2 Fuyuno Mikazuki

      .card
        .card-header
          .card-title.h5 About me
        .card-body
          section
            p
              | I am a frontend, backend and .NET engineer in Tokyo, Japan.
              br
              | If you are interested in me, please see 
              router-link(to="projects") projects
              | &nbsp;and 
              router-link(to="contributings") contributings
              | .
          section
            .items
              .item.tooltip(v-for="link in links" :key="link.icon.replace(' ', '.')" :data-tooltip="link.text")
                template(v-if="link.href.startsWith('http')")
                  a(:href="link.href" target="_blank")
                    font-awesome(:icon="link.icon")
                template(v-else)
                  a(:href="link.href")
                    font-awesome(:icon="link.icon")

</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import Avatar from "@/presentationals/Avatar.vue";
import FontAwesome from "@/presentationals/FontAwesome.vue";

import { ILink } from "@/models/link";
import { IRootState } from "@/models/state";

@Component({
  components: {
    avatar: Avatar,
    "font-awesome": FontAwesome
  }
})
export default class Home extends Vue {
  @State((state: IRootState) => state.links)
  public links!: ILink[];
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  h1 {
    // http://getskeleton.com/
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  section {
    margin: 0 0 10px 0;
  }

  .avatar-local {
    height: 200px;
    width: 200px;
  }

  .card {
    text-align: initial;
  }

  .items {
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    .item {
      padding: 0 5px 0 0;
    }
  }
}
</style>
