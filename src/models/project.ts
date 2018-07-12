export interface IProject {
  name: string;
  website: string;
  role?: string[];
  prs?: number[];
  languages?: string[];
  description?: string;

  //
  isOpenSource: boolean;
  repository?: string;
  isArchived?: boolean;
}
