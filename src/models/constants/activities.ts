import { sortBy } from "lodash";

import { IActivity } from "../activity";

const activities: IActivity[] = sortBy([
  {
    name: "Misskey 投稿数",
    id: "misskey"
  },
  {
    name: "Twitter 投稿数",
    id: "twitter"
  },
  {
    name: "ワンドロ",
    id: "illust"
  }
] as IActivity[], (w: IActivity) => w.name.toLocaleLowerCase());

export { activities };
