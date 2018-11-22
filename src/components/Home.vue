<template lang="pug">
  .content
    section
      avatar.avatar-local(src="/img/icon.png")
    
    section
      h2 Fuyuno Mikazuki

      .card
        .card-header
          .card-title.h5 About me
        .card-body
          section
            p
              | なにかいろいろやっているように見えますが、とくになにもできません。
              br
              | それでも私に興味があるなら、
              router-link(to="projects") 個人プロジェクト
              | や&nbsp;
              router-link(to="contributions") やってきたこと
              | 、
              router-link(to="personality") パーソナリティ
              | 、 
              router-link(to="favorites") 大好きなもの
              | をどうぞ (ӧ◡ӧ✿).

          section
            .items
              .item.tooltip(v-for="link in links" :key="link.icon.replace(' ', '.')" :data-tooltip="link.text")
                template(v-if="link.href.startsWith('http')")
                  a(:href="link.href" target="_blank" rel="noreferrer")
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
  text-align: center;

  section {
    margin: 0 0 10px 0;
  }

  .avatar-local {
    height: 200px;
    width: 200px;
  }

  .card {
    text-align: initial;
    max-width: 625px;
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
