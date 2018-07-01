<template lang="pug">
  b-container
    section
      .text-center
        .icon
          .rounded
            img(src="https://www.gravatar.com/avatar/8f7571eb815b4c6b2ef883b1c8ed97dd?s=256")

        h2 Fuyuno Mikazuki
        p せめて心だけでも健康に生きたい

    b-row.justify-content-md-center
      b-col(md="12")
        b-card(title="Public Products / Repositories")
          .card-text
            b-row
              b-col(md="12" lg="6")
                section(v-for="product in products.filter((element, index) => index % 2 == 0)" :key="product.name")
                  product(:product="product")
              b-col(md="12" lg="6")
                section(v-for="product in products.filter((element, index) => index % 2 == 1)" :key="product.name")
                  product(:product="product")

      b-col(md="12" lg="6")
        b-card(title="Interests")
          .card-text
            ul(v-for="interest in interests" :key="interest")
              li {{interest}}

      b-col(md="12" lg="6")
        b-card(title="Links")
          .card-text
            ul(v-for="link in links" :key="link.name")
              li
                | {{`${link.name} `}}
                a(:href="link.a.href" target="_blank") {{link.a.text}}
             
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "Main",
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          name: "administrate-field-enumerize",
          repo: "mika-f/administrate-field-enumerize",
          languages: ["Ruby"],
          url: "https://rubygems.org/gems/administrate-field-enumerize",
          description: "Administrate の Enumerize 拡張"
        },
        {
          name: "webshop-url-shortener",
          repo: "mika-f/webshop-url-shortener",
          languages: ["JavaScript"],
          url: "https://github.com/mika-f/webshop-url-shortener",
          description: "オンラインショップの URL を整形する Chrome 拡張"
        },
        {
          name: "croudia4r",
          repo: "mika-f/croudia4r",
          languages: ["Ruby"],
          url: "https://rubygems.org/gems/croudia4r",
          description: "Croudia Rubygem"
        },
        {
          name: "crypto-faucets",
          repo: "mika-f/crypto-faucets",
          languages: ["JavaScript", "TypeScript", "Vue"],
          url: "https://ccfaucet.mochizuki.moe",
          description: "仮想通貨乞食用まとめサイト"
        },
        {
          name: "embed_media",
          repo: "mika-f/embed_media",
          languages: ["Ruby"],
          url: "https://rubygems.org/gems/embed_media",
          description: "YouTube などを埋め込めるタグを追加する Rails 拡張"
        },
        {
          name: "omniauth-croudia",
          repo: "mika-f/omniauth-croudia",
          languages: ["Ruby"],
          url: "https://rubygems.org/gems/omniauth-croudia",
          description: "OmniAuth の Croudia 拡張"
        },
        {
          name: "Phoenix",
          repo: "mika-f/Phoenix",
          languages: ["C#"],
          url: "https://mochizuki.moe/phoenix/",
          description: "VAIO のためのソフトウェア更新通知アプリケーション"
        },
        {
          name: "Sagitta",
          repo: "mika-f/Sagitta",
          languages: ["C#"],
          url: "https://sagitta.mochizuki.moe/",
          description: ".NET Standard 2.0 用に作成された pixiv クライアントライブラリ"
        },
        {
          name: "language-badge",
          repo: "mika-f/language-badge",
          languages: ["CSS"],
          url: "https://www.npmjs.com/package/language-badge",
          description: "GitHub の Language Color に合わせたバッジ"
        },
        {
          name: "Kotoha",
          repo: "mika-f/Kotoha",
          languages: ["C#"],
          url: "https://github.com/mika-f/Kotoha",
          description: "VOICEROID2 などへの共通アクセス API を提供するライブラリ"
        }
      ].sort((a, b) => {
        const an = a.name.toLowerCase();
        const bn = b.name.toLowerCase();
        return an < bn ? -1 : an > bn ? 1 : 0;
      }),
      interests: ["Cryptocurrency", "Blockchain", "Machine Learning", "Unity3D"],
      links: [
        { name: "Twitter", a: { text: "@MikazukiFuyuno", href: "https://twitter.com/MikazukiFuyuno" } },
        { name: "GitHub", a: { text: "@mika-f", href: "https://github.com/mika-f" } },
        { name: "Blog", a: { text: "みかづきメモ", href: "https://mikazuki.hatenablog.jp" } },
        { name: "E-Mail", a: { text: "me@mochizuki.moe", href: "mailto:me@mochizuki.moe" } }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.icon {
  padding-bottom: 10px;
}

.rounded {
  border-radius: 100% !important;
  border: solid #cccccc 1px;
  box-shadow: 1.5px 1.5px 3px #aaaaaa;
  margin: 0 auto;
  height: 194px;
  width: 194px;

  img {
    border-radius: 100%;
    border: solid white 5px;
    height: 192px;
    width: 192px;
  }
}

// Override
.card {
  margin-bottom: 1.25rem;
}

ul {
  margin-bottom: 0.1em;
}

section {
  margin-bottom: 1.5rem;
}
</style>
