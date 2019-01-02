<template lang="pug">
  #container(class="m-2 sm:m-0")
    section.p-2
      avatar.avatar-local(src="/img/icon.png")
    
    section.text-center.pb-4
      h2 Fuyuno Mikazuki

    card
      h5 About me

      section.my-4
        p
          | 好きなものを好きだと言い続けることを使命に生きています。
          br
          | 私に興味があるなら、
          router-link(to="projects") 個人プロジェクト
          | や&nbsp;
          router-link(to="contributions") やってきたこと
          | 、
          router-link(to="personality") パーソナリティ
          | 、 
          router-link(to="favorites") 大好きなもの
          | をどうぞ (ӧ◡ӧ✿).
      
      section.mb-4.flex
        .pr-1.tooltip(v-for="link in links" :key="link.icon.replace(' ', '.')" :data-tooltip="link.text")
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
import Card from "@/presentationals/Card.vue";
import FontAwesome from "@/presentationals/FontAwesome.vue";

import { ILink } from "@/models/link";
import { IRootState } from "@/models/state";

@Component({
  components: {
    avatar: Avatar,
    card: Card,
    "font-awesome": FontAwesome
  }
})
export default class Home extends Vue {
  @State((state: IRootState) => state.links)
  public links!: ILink[];
}
</script>

<style lang="scss" scoped>
.avatar-local {
  height: 200px;
  width: 200px;
}

#container {
  max-width: 625px;
}
</style>
