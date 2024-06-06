export interface CategoryType {
  id: number;
  image: string;
  number: number;
  title_ru: string;
  title_tu: string;
  title_kg: string;
  title_en: string;
  link: string;
  is_about: boolean;
  is_constructr: boolean;
  is_collagen: boolean;
  is_coffe: boolean;
  is_tea: boolean;
  is_drink: boolean;
  is_bar: boolean;
  is_smuzi: boolean;
  is_wine: boolean;
  is_sale: boolean;
}

export interface SubCategoryType {
  map: any;
  id: number;
  category_id?: number;
  image: string;
  number: number;
  title_ru: string;
  title_tu: string;
  title_kg: string;
  title_en: string;
  link: string;
}
