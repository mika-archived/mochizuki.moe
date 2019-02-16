import { sortBy } from "lodash";

import { IProject } from "@/models/project";

const projects: IProject[] = sortBy([
  {
    name: "Kotoha",
    website: "https://kotoha.mochizuki.moe",
    languages: ["C#"],
    description: "VOICEROID2 などの Text2Speech ライブラリの .NET 共通フロントエンド実装",
    isOpenSource: true,
    repository: "mika-f/Kotoha"
  },
  {
    name: "Sagitta",
    website: "https://www.nuget.org/packages/Sagitta/",
    languages: ["C#"],
    description: ".NET Standard 2.0 ターゲットのpixiv API ラッパーライブラリ",
    isOpenSource: true,
    repository: "mika-f/Sagitta"
  },
  {
    name: "Phoenix",
    website: "https://github.com/mika-f/Phoenix/releases",
    languages: ["C#"],
    description: "VAIO のソフトウェア更新通知アプリケーション",
    isOpenSource: true,
    repository: "mika-f/Phoenix"
  },
  {
    name: "webshop-url-shortener",
    website: "https://github.com/mika-f/webshop-url-shortener",
    languages: ["JavaScript"],
    description: "オンラインショップの URL 短縮 Chrome 拡張",
    isOpenSource: true,
    repository: "mika-f/webshop-url-shortener"
  },
  {
    name: "ccfaucet.mochizuki.moe",
    website: "https://ccfaucet.mochizuki.moe",
    languages: ["Vue", "TypeScript", "JavaScript"],
    description: "仮想通貨の蛇口リスト",
    isOpenSource: true,
    repository: "mika-f/ccfaucet.mochizuki.moe"
  },
  {
    name: "Norma",
    website: "https://github.com/mika-f/Norma",
    languages: ["C#", "JavaScript"],
    description: "非公式 AbemaTV デスクトップクライアント",
    isOpenSource: true,
    repository: "mika-f/Norma",
    isArchived: true
  },
  {
    name: "language-badge",
    website: "https://mochizuki.moe/language-badge/",
    languages: ["CSS"],
    description: "各種プログラミング言語カラーの Bootstrap 風バッジ",
    isOpenSource: true,
    repository: "mika-f/language-badge"
  },
  {
    name: "Pyxis",
    website: "https://kokoiroworks.com/pyx/",
    languages: ["C#"],
    description: "Windows 向けの pixiv ビューアー",
    isOpenSource: false
  },
  {
    name: "Orion",
    website: "https://github.com/mika-f/Orion",
    languages: ["C#"],
    description: "macOS および Windows 向けのマイクロブログクライアント",
    isOpenSource: true,
    repository: "mika-f/Orion"
  },
  {
    name: "omniauth-croudia",
    website: "https://github.com/mika-f/omniauth-croudia",
    languages: ["Ruby"],
    description: "Croudia 向け OmniAuth ストラテジ",
    isOpenSource: true,
    repository: "mika-f/omniauth-croudia",
    isArchived: true
  },
  {
    name: "administrate-field-enumerize",
    website: "https://rubygems.org/gems/administrate-field-enumerize",
    languages: ["Ruby"],
    description: "Administrate の Enumerize 拡張プラグイン",
    isOpenSource: true,
    repository: "mika-f/administrate-field-enumerize"
  },
  {
    name: "Sagittarius",
    website: "https://github.com/mika-f/Sagittarius",
    languages: ["TypeScript"],
    description: "macOS, Linux, Windows 向けの Chatwork デスクトップクライアント",
    isOpenSource: true,
    repository: "mika-f/Sagittarius",
    isArchived: true
  },
  {
    name: "embed_media",
    website: "https://rubygems.org/gems/embed_media",
    languages: ["Ruby"],
    description: "YouTube や Vimeo などの埋め込むメディア対応 Rails プラグイン",
    isOpenSource: true,
    repository: "mika-f/embed_media",
    isArchived: true
  },
  {
    name: "croudia4r",
    website: "https://rubygems.org/gems/croudia4r",
    languages: ["Ruby"],
    description: "Croudia クライアントライブラリ for Ruby",
    isOpenSource: true,
    repository: "mika-f/croudia4r",
    isArchived: true
  },
  {
    name: "mochizuki.moe",
    website: "/",
    languages: ["TypeScript", "Vue", "JavaScript"],
    description: "このサイト",
    isOpenSource: true,
    repository: "mika-f/mochizuki.moe",
  },
  {
    name: "Robock",
    website: "https://robock.mochizuki.moe",
    languages: ["C#", "C++", "C", "HLSL"],
    description: "Window Capture と Dynamic Wallpaper を組み合わせたアプリケーション",
    isOpenSource: true,
    repository: "mika-f/Robock"
  },
  {
    name: "Disboard",
    website: "https://www.nuget.org/packages?q=Disboard",
    languages: ["C#"],
    description: ".NET Standard 2.0 ターゲットの Fediverse 対応サービスの API ラッパーライブラリ",
    isOpenSource: true,
    repository: "OrionDevelop/Disboard"
  },
  {
    name: "Pixela",
    website: "https://www.nuget.org/packages/Pixela",
    languages: ["C#"],
    description: ".NET Standard 2.0 ターゲットの Pixela API ラッパーライブラリ",
    isOpenSource: true,
    repository: "mika-f/Pixela"
  },
  {
    name: "Missxel",
    website: "https://github.com/mika-f/Missxel",
    languages: ["C#"],
    description: "Misskey での1日の投稿数を Pixela にプロットする Azure Functions",
    isOpenSource: true,
    repository: "mika-f/Missxel"
  },
  {
    name: "Cocono",
    website: "https://cocono.mochizuki.moe",
    languages: ["TypeScript"],
    description: "処理を挟むことが出来る Webhook リレーサーバー",
    isOpenSource: true,
    repository: "mika-f/Cocono"
  }
] as IProject[], (w: IProject) => w.name.toLocaleLowerCase());

export {
  projects
};
