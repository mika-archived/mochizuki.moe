import { sortBy } from "lodash";

import { IProject } from "@/models/project";

const contributions: IProject[] = sortBy([
  {
    name: "BetterTweetDeck",
    website: "https://better.tw",
    prs: [322],
    languages: ["JavaScript"],
    isOpenSource: true,
    repository: "eramdam/BetterTweetDeck"
  },
  {
    name: "MAngaNIA",
    website: "https://mangania.jp",
    role: ["フロント", "サーバー"],
    languages: ["Ruby", "JavaScript", "CoffeeScript"],
    isOpenSource: false
  },
  {
    name: "CLEN",
    website: "https://clen.be",
    role: ["フロント", "サーバー", "インフラ (AWS)"],
    languages: ["Ruby", "JavaScript", "TypeScript", "Vue"],
    isOpenSource: false
  },
  {
    name: "tagbottle",
    website: "https://docs.tagbottle.com/",
    prs: [399, 472, 474],
    languages: ["JavaScript", "TypeScript", "Vue"],
    isOpenSource: true,
    repository: "https://gitlab.com/tagbottle/tagbottle.com"
  }
] as IProject[], ["name"]);

export {
  contributions
};
