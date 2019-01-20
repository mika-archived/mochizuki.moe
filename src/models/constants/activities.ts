import { sortBy } from "lodash";

import { IActivity } from "../activity";

const activities: IActivity[] = sortBy([
  {
    name: "Misskey Notes",
    link: "https://pixe.la/v1/users/mika/graphs/misskey.html"
  },
  {
    name: "Twitter Tweets",
    link: "https://pixe.la/v1/users/mika/graphs/twitter.html"
  }
] as IActivity[], (w: IActivity) => w.name.toLocaleLowerCase());

export { activities };
