import { ILink } from "@/models/link";
import { IProject } from "@/models/project";

export interface IRootState {
  links: ILink[];
  projects: IProject[];
}
