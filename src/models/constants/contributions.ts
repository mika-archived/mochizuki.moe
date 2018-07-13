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
    role: ["Frontend", "Backend"],
    languages: ["Ruby", "JavaScript", "CoffeeScript"],
    isOpenSource: false
  },
  {
    name: "CLEN",
    website: "https://clen.be",
    role: ["Frontend", "Backend", "Infrastructure"],
    languages: ["Ruby", "JavaScript", "TypeScript", "Vue"],
    isOpenSource: false
  }
] as IProject[], ["name"]);

export {
  contributions
};
