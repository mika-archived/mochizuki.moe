import { sortBy } from "lodash";

import { IActivity } from "../activity";

const activities: IActivity[] = sortBy([
  {
    name: "Misskey 投稿数",
    link: "https://pixe.la/v1/users/mika/graphs/misskey.html"
  },
  {
    name: "Twitter 投稿数",
    link: "https://pixe.la/v1/users/mika/graphs/twitter.html"
  },
  {
    name: "描いたイラストの数",
    link: "https://pixe.la/v1/users/mika/graphs/illust.html"
  }
] as IActivity[], (w: IActivity) => w.name.toLocaleLowerCase());

export { activities };
