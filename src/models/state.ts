import { ILink } from "@/models/link";
import { ICategorizedFavorites } from "@/models/favorite";
import { IProject } from "@/models/project";

export interface IRootState {
  contributions: IProject[];
  favorites: ICategorizedFavorites;
  links: ILink[];
  projects: IProject[];
}
