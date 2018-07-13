export interface IFavorite {
  name: string;
  href: string;
}

export interface ICategory {
  name: string;
  favorites: IFavorite[];
}

export interface ICategorizedFavorites {
  categories: ICategory[];
}
