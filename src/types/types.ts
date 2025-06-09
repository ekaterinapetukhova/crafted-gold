export interface Product {
  slug: string;
  title: string;
  content: string;
  price: number;
}

export enum ProductsCategories {
  Ale = "Ale",
  Lager = "Lager",
  WheatBeers = "Wheat Beers",
  Stouts = "Stouts",
}

export type CategoryWithProducts = Record<ProductsCategories, Product[]>;
