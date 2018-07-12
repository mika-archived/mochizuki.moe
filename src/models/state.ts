import { ILink } from "@/models/link";
import { IProject } from "@/models/project";

export interface IRootState {
  contributions: IProject[];
  links: ILink[];
  projects: IProject[];
}
