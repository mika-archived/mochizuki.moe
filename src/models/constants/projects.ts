import { sortBy } from "lodash";

import { IProject } from "@/models/project";

const projects: IProject[] = sortBy([
  {
    name: "Kotoha",
    website: "https://kotoha.mochizuki.moe",
    languages: ["C#"],
    description: "Kotoha is a .NET library that provides a common API for operations such as VOICEROID2.",
    isOpenSource: true,
    repository: "mika-f/Kotoha"
  },
  {
    name: "Sagitta",
    website: "https://sagitta.mochizuki.moe",
    languages: ["C#"],
    description: "\"Sagitta\" is pixiv API wrapper for .NET Standard 2.0.",
    isOpenSource: true,
    repository: "mika-f/Sagitta"
  },
  {
    name: "Phoenix",
    website: "https://github.com/mika-f/Phoenix/releases",
    languages: ["C#"],
    description: "\"Phoenix\" : Software update notificator for VAIO (not made by Sony).",
    isOpenSource: true,
    repository: "mika-f/Phoenix"
  },
  {
    name: "webshop-url-shortener",
    website: "https://github.com/mika-f/webshop-url-shortener",
    languages: ["JavaScript"],
    description: "URL shortener for online shopping services.",
    isOpenSource: true,
    repository: "mika-f/webshop-url-shortener"
  },
  {
    name: "crypto-faucets",
    website: "https://ccfaucet.mochizuki.moe",
    languages: ["Vue", "TypeScript", "JavaScript"],
    description: "Cryptocurrency faucet list such as bitcoin, litecoin and others...",
    isOpenSource: true,
    repository: "mika-f/crypto-faucets"
  },
  {
    name: "Norma",
    website: "https://github.com/mika-f/Norma",
    languages: ["C#", "JavaScript"],
    description: "\"Norma\" is unoffcial desktop application for AbemaTV.",
    isOpenSource: true,
    repository: "mika-f/Norma",
    isArchived: true
  },
  {
    name: "language-badges",
    website: "https://mochizuki.moe/language-badge/",
    languages: ["CSS"],
    description: "Bootstrap-Style Badges of GitHub colors for all the programming languages.",
    isOpenSource: true,
    repository: "mika-f/language-badges"
  },
  {
    name: "Pyxis",
    website: "https://kokoiroworks.com/pyx/",
    languages: ["C#"],
    description: "pixiv viewer for Universal Windows Platform (Desktop only)",
    isOpenSource: false
  },
  {
    name: "Orion",
    website: "https://github.com/mika-f/Orion",
    languages: ["C#"],
    description: "\"Orion\" is generic microblogging and social networking application for Windows and macOS.",
    isOpenSource: true,
    repository: "mika-f/Orion"
  },
  {
    name: "omniauth-croudia",
    website: "https://github.com/mika-f/omniauth-croudia",
    languages: ["Ruby"],
    description: "OmniAuth strategy for Croudia",
    isOpenSource: true,
    repository: "mika-f/omniauth-croudia",
    isArchived: true
  },
  {
    name: "administrate-field-enumerize",
    website: "https://rubygems.org/gems/administrate-field-enumerize",
    languages: ["Ruby"],
    description: "Plugin for adding Enumerize gem support in Administrate.",
    isOpenSource: true,
    repository: "mika-f/administrate-field-enumerize"
  },
  {
    name: "Sagittarius",
    website: "https://github.com/mika-f/Sagittarius",
    languages: ["TypeScript"],
    description: "\"Sagittarius\" is Chatwork application for OS X, Linux and Windows.",
    isOpenSource: true,
    repository: "mika-f/Sagittarius",
    isArchived: true
  },
  {
    name: "embed_media",
    website: "https://rubygems.org/gems/embed_media",
    languages: ["Ruby"],
    description: "Embedded Medias as Youtube, Vimeo and Niconico.",
    isOpenSource: true,
    repository: "mika-f/embed_media",
    isArchived: true
  },
  {
    name: "croudia4r",
    website: "https://rubygems.org/gems/croudia4r",
    languages: ["Ruby"],
    description: "Croudia rubygem",
    isOpenSource: true,
    repository: "mika-f/croudia4r",
    isArchived: true
  },
  {
    name: "mika-f.github.io",
    website: "/",
    languages: ["TypeScript", "Vue", "JavaScript"],
    description: "This website!",
    isOpenSource: true,
    repository: "mika-f/mika-f.github.io",
  }
] as IProject[], (w: IProject) => w.name.toLocaleLowerCase());

export {
  projects
};
